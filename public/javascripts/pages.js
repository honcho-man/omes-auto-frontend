var Dashboard = $('.dashboard');
var Profile = $('.users');
var Control = $('.control');
var Setting = $('.settings');

function dashboard() {

    Dashboard.removeClass('hide');
    $('.home').addClass('active-navigator');
    $('.home').removeClass('hide');
    $('.lni-home').addClass('hide');
    closeusers();
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
    closeusers();
    closesetting();
    Closepanelfornav();

}

function closecontrol() {
    Control.addClass('hide');
    $('.devices').removeClass('active-navigator');
    $('.devices').addClass('hide');
    $('.lni-bolt').removeClass('hide');
}

function users() {
    Profile.removeClass('hide');
    $('.user').addClass('active-navigator');
    $('.user').removeClass('hide');
    $('.lni-user').addClass('hide');
    closedashboard();
    closecontrol();
    closesetting();
    Closepanelfornav();
}

function closeusers() {
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
    closeusers();
    Closepanelfornav();

}

function closesetting() {
    Setting.addClass('hide');
    $('.setting').removeClass('active-navigator');
    $('.setting').addClass('hide');
    $('.lni-cog').removeClass('hide');
    cancelProfileInner();

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

function profile() {
    $('.profile-page').addClass('slide-in-right');
    $('.wrapper').addClass('slide-out-left');
    $('.profile-page').removeClass('slide-out-right');
    $('.wrapper').removeClass('slide-in-left');
}

function gobacktosettingsfromprofile() {
    $('.profile-page').addClass('slide-out-right');
    $('.wrapper').addClass('slide-in-left');
    $('.profile-page').removeClass('slide-in-right');
    $('.wrapper').removeClass('slide-out-left');
}

function prolify() {
    setting();
    profile();
}


function notify() {
    $('.page-wrapper-contn').addClass('slide-out-left');
    $('.notification-page').addClass('slide-in-right');
    $('.page-wrapper-contn').removeClass('slide-in-left');
    $('.notification-page').removeClass('slide-out-right');
}

function unnotify() {
    $('.page-wrapper-contn').addClass('slide-in-left');
    $('.notification-page').addClass('slide-out-right');
    $('.page-wrapper-contn').removeClass('slide-out-left');
    $('.notification-page').removeClass('slide-in-right');
}

function cancelProfileInner() {
    $('.page-wrapper-contn').removeClass('slide-in-left');
    $('.notification-page').removeClass('slide-out-right');
    $('.page-wrapper-contn').removeClass('slide-out-left');
    $('.notification-page').removeClass('slide-in-right');
    $('.profile-page').removeClass('slide-out-right');
    $('.profile-page').removeClass('slide-in-left');
    $('.profile-page').removeClass('slide-in-right');
    $('.wrapper').removeClass('slide-out-left');
    $('.wrapper').removeClass('slide-in-left');
}

function openNotify() {
    notify();
    profile();
    setting();
}