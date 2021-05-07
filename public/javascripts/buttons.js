var btninput = $('#toggleswitch');
var outputtext = $('#status');

const switchRes = $('.switch-res');
var toggleSw = $("#toggleswitch").val();

function switchUpp() {
    if (btninput.prop("checked") == true) {
        outputtext.html("aktiv");
        btninput.val('on');
        handlebtn();
    } else {
        outputtext.html("inaktiv");
        btninput.val('off');
        handlebtn();
    }
};
var Btnurl = '/' + btninput.val();

function handlebtn() {
    switchRes.html(Btnurl + '<div>Submitting <i class="fa fas fa-spinner fa-pulse"></i></div>');
    const switchStat = {
        method: 'POST',
        url: Btnurl,
        data: {
            btnD: toggleSw
        }
    }
    $.ajax(switchStat).done(response => {
        switchRes.html('<div>Submitted <i class="fa fa-check-circle"></i></div>');
    })
}