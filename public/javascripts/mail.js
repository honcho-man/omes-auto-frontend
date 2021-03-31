$('#submitmail').on('click', handleform)

function handleform(e) {
    $('.formstat').html('<div>Submitting <i class="fa fas fa-spinner fa-pulse"></i></div>')
    e.preventDefault();
    const options = {
        method: 'POST',
        url: '/mailer',
        data: {
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        },
    }
    $.ajax(options).done(response => {
        $('.formstat').html('<div>Submitted <i class="fa fa-check-circle"></i></div>')
        $('.email-form').each(function() {
            this.reset();
        });
    })
}

$('.proceed').on('click', handlenewuserform)

function handlenewuserform(e) {
    $('.proceed-new-user').html('<div>Sending <i class="fa fas fa-spinner fa-pulse"></i></div>')
    e.preventDefault();
    const options = {
        method: 'POST',
        url: '/new-user-mailer',
        data: {
            email: $("#NewUser").val()
        },
    }
    $.ajax(options).done(response => {
        $('.proceed-new-user').html('<div>Sent <i class="fa fa-check-circle"></i></div>')
    })
}