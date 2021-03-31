var Dashboard = $('.dashboard');
var Profile = $('.profile');
var Control = $('.control');
var Setting = $('.settings');

function dashboard() {

    Dashboard.removeClass('hide');
    $('.home').addClass('active-navigator');
    $('.home').removeClass('hide');
    $('.lni-home').addClass('hide');
    closeprofile();
    Closepanelfornav();
    closecontrol();
    closesetting();
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
    cancelProfileInner();
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

function profilemodal() {
    $('.cosmo').addClass('force-display');
}

function cancelprofilemodal() {
    $('.cosmo').removeClass('force-display');
}

function notice() {
    $('.form-notice').removeClass('hide');
}

function notify() {
    $('.profile-page').addClass('slide-out-left');
    $('.notification-page').addClass('slide-in-right');
    $('.profile-page').removeClass('slide-in-left');
    $('.notification-page').removeClass('slide-out-right');
}

function unnotify() {
    $('.profile-page').addClass('slide-in-left');
    $('.notification-page').addClass('slide-out-right');
    $('.profile-page').removeClass('slide-out-left');
    $('.notification-page').removeClass('slide-in-right');
}

function cancelProfileInner() {
    $('.profile-page').removeClass('slide-in-left');
    $('.notification-page').removeClass('slide-out-right');
    $('.profile-page').removeClass('slide-out-left');
    $('.notification-page').removeClass('slide-in-right');
}

function openNotify() {
    profile();
    notify();
}