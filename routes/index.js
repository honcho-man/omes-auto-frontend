var express = require('express');
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var app = module.exports = express();
/* GET home page. */
app.get('/test', (req, res) => {
    const animal = 'alligator';
    // Send a text/html file back with the word 'alligator' repeated 1000 times
    res.send(animal.repeat(1000));
});
app.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

app.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

// middleware

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

app.use(express.urlencoded({ extended: false }))
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));

// Session-persisted message middleware

app.use(function(req, res, next) {
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

// dummy database

var users = {
    oladokun: { name: 'oladokun' },
    lanre: { name: 'lanre' },
    lekan: { name: 'lekan' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash({ password: 'foobar' }, function(err, pass, salt, hash) {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.oladokun.salt = salt;
    users.lanre.salt = salt;
    users.lekan.salt = salt;
    users.oladokun.hash = hash;
    users.lanre.hash = hash;
    users.lekan.hash = hash;
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash({ password: pass, salt: user.salt }, function(err, pass, salt, hash) {
        if (err) return fn(err);
        if (hash === user.hash) return fn(null, user)
        fn(new Error('invalid password'));
    });
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

app.get('/', function(req, res) {
    res.render('index', { title: 'Welcome to OMES' });
});

app.get('/restricted', restrict, function(req, res) {
    res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
});

app.get('/logout', function(req, res) {
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function() {
        res.redirect('/login');
    });
});

app.get('/dashboard', function(req, res, user) {
    authenticate(req.body.username, req.body.password, function(err, user) {
        if (user) {
            req.session.user = user;
            res.render('dashboard', { title: 'Dashboard', username: user.name });
        } else {
            res.send('Wahoo! restricted area, click to <a href="/login">login</a>');
        }
    });
});
app.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
});
app.post('/dashboard', function(req, res) {
    authenticate(req.body.username, req.body.password, function(err, user) {
        if (user) {
            req.session.regenerate(function() {
                req.session.user = user;
                res.render('dashboard', { title: 'Dashboard', username: user.name });
            });
        } else {
            res.render('login', { title: 'Login' });
        }
    });
});
module.exports = app;