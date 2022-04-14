function showDialog( ) {

  console.debug("_____________ DEBUG _____________: in /ShowDialog()");
  var options = {
    height: 160,
    width: 250,
    resizable: false,
    draggable: false,
  };
  $("#request_pass_dialog").show();
  $("#request_pass_dialog").dialog(options);
}

function requestPass( ) {
	console.debug("_____________ DEBUG _____________: in /requestPasss)");
  var email = $('#email_input').val();
  console.debug(" $> email content: [" + email + "]");

  if( validateEmail(email) == false ) {
    alert('Please insert a valid email.')
  }else{

    $.ajax({
      url: "http://aws-ec2-cit-mronchi.org/request_pass/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({'email': email}),
      dataType: "json",
      success: function( response ) {
        console.debug(response);
        if (response['res']=='NO') {
          alert('Server failed to send you an email. Please contact me directly.');
        }
        if (response['res']=='OK') {
          console.debug(" $> Added user correctly ");
          alert('Sent you credentials, please check your inbox - or spam :)');
          $("#request_pass_dialog").dialog("close");

          console.debug(" $> Done ");
        }
      },
      error: function() {
        alert('Credentials request failed. Please try again or contact me directly.');
      }
    });
  }
}

/*
function downloadVVN( ) {
  console.debug("_____________ DEBUG _____________: in /downloadVVN)");
 
  result = window.locate.href("../DAtaset/sdgsignsr")
 
  if( result.status = 401) {
  
  }else{

  }
}
*/

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
