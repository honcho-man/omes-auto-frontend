var Dashboard = $('.dashboard');
var Profile = $('.profile');
var Control = $('.control');
var Setting = $('.settings');

function dashboard() {
    if (Dashboard.hasClass('hide')) {
        Dashboard.removeClass('hide');
        $('.home').addClass('active-navigator');
        $('.home').removeClass('hide');
        $('.lni-home').addClass('hide');
        closeprofile();
        Closepanelfornav();
        closecontrol();
        closesetting();
    } else if (!Dashboard.hasClass('hide')) {
        location.href = '/dashboard';
        closeprofile();
        closecontrol();
        closesetting();
    }
}

function closedashboard() {
    Dashboard.addClass('hide');
    $('.home').removeClass('active-navigator');
    $('.home').addClass('hide');
    $('.lni-home').removeClass('hide');
}

function control() {
    Control.removeClass('hide');
    $('.devices').addClass('active-navigator');
    $('.devices').removeClass('hide');
    $('.lni-bolt').addClass('hide');
    closedashboard();
    closeprofile();
    closesetting();
    Closepanelfornav();

}

function closecontrol() {
    Control.addClass('hide');
    $('.devices').removeClass('active-navigator');
    $('.devices').addClass('hide');
    $('.lni-bolt').removeClass('hide');
}

function profile() {
    Profile.removeClass('hide');
    $('.user').addClass('active-navigator');
    $('.user').removeClass('hide');
    $('.lni-user').addClass('hide');
    closedashboard();
    closecontrol();
    closesetting();
    Closepanelfornav();
}

function closeprofile() {
    Profile.addClass('hide');
    $('.user').removeClass('active-navigator');
    $('.user').addClass('hide');
    $('.lni-user').removeClass('hide');
}


function setting() {
    Setting.removeClass('hide');
    $('.setting').addClass('active-navigator');
    $('.setting').removeClass('hide');
    $('.lni-cog').addClass('hide');
    closedashboard();
    closecontrol();
    closeprofile();
    Closepanelfornav();

}

function closesetting() {
    Setting.addClass('hide');
    $('.setting').removeClass('active-navigator');
    $('.setting').addClass('hide');
    $('.lni-cog').removeClass('hide');
}