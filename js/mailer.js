$("#email").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'default_service');
    formData.append('template_id', 'email_blast');
    formData.append('user_id', 'user_NT8KduLVWnsRhOfMwJEB8');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');

    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});