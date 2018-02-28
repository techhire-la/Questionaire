
$.ajax({
	    url: "https://api.mailgun.net/v3/YOUR_SANDBOX.mailgun.orgsandboxcee88074206c4889a0560f46882c10e7.mailgun.org/messages",
		type:"POST",
		username: 'api',
		password: 'key-a3c472e92673797be0c568201e587a95',
		data:{
			"html": `<h1>TITLE-HERE</h1>`,
			"subject": $title,
			"from": "User<user@example.com>",
			"to": "<user@example.com>"
		},
		success:function(a,b,c){
			console.log( 'mail sent: ', b );
		}.bind(this),
		error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
    });
    
    