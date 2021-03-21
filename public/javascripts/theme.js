// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
var innerBurger = $('.hamburger-inner');

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        innerBurger.removeClass('nightburger');
        innerBurger.addClass('dayburger');
        innerBurger.html(
            '<style>.hamburger-inner::after,.hamburger-inner::before{background:black !important;}</style>'
        )
    } else {
        setTheme('theme-dark');
        innerBurger.addClass('nightburger');
        innerBurger.removeClass('dayburger');
        innerBurger.html(
            '<style>.hamburger-inner::after,.hamburger-inner::before{background:white !important;}</style>'
        )
    }
}

// Immediately invoked function to set the theme on initial load
(function() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();

function goDown() {
    $('html, body').animate({
        scrollTop: $('.appTwo').offset().top
    }, 1000)
};