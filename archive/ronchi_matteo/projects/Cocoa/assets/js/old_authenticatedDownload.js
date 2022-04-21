/*
                <div id="pass_dialog_api" title="Download Coco-a Api" style="display:none;">
                  <fieldset class="ui-helper-reset">
                    <div>Email:</div>
                    <input type="text" id="email_input_api" class="ui-widget-content ui-corner-all">
                    <br>
                    <div>Password:</div>
                    <input type="password" id="pass_input_api" class="ui-widget-content ui-corner-all">
                    <br>
                  </fieldset>
                  <a class="btn btn-primary" type="button" id="request_button_api" style="background:#C2C1C1;margin-top:20px;" onclick="requestPass_api(this);"><b>Register</b></a>
                  <a class="btn btn-primary" type="button" id="login_button_api" style="background:#C2C1C1;margin-top:20px;" onclick="verifyPass_api(this);"><b>Log In</b></a>
                </div>

                <div id="pass_dialog_cocoa" title="Download Coco-a" style="display:none;">
                  <fieldset class="ui-helper-reset">
                    <div>Email:</div>
                    <input type="text" id="email_input_cocoa" class="ui-widget-content ui-corner-all">
                    <br>
                    <div>Password:</div>
                    <input type="password" id="pass_input_cocoa" class="ui-widget-content ui-corner-all">
                    <br>
                  </fieldset>
                  <a class="btn btn-primary" type="button" id="request_button_cocoa" style="background:#C2C1C1;margin-top:20px;" onclick="requestPass_cocoa(this);"><b>Register</b></a>
                  <a class="btn btn-primary" type="button" id="login_button_cocoa" style="background:#C2C1C1;margin-top:20px;" onclick="verifyPass_cocoa(this);"><b>Log In</b></a>
                </div>

                <div id="pass_dialog_vvn" title="Download VVN" style="display:none;">
                  <fieldset class="ui-helper-reset">
                    <div>Email:</div>
                    <input type="text" id="email_input_vvn" class="ui-widget-content ui-corner-all">
                    <br>
                    <div>Password:</div>
                    <input type="password" id="pass_input_vvn" class="ui-widget-content ui-corner-all">
                    <br>
                  </fieldset>
                  <a class="btn btn-primary" type="button" id="request_button_vvn" style="background:#C2C1C1;margin-top:20px;" onclick="requestPass_vvn(this);"><b>Register</b></a>
                  <a class="btn btn-primary" type="button" id="login_button_vvn" style="background:#C2C1C1;margin-top:20px;" onclick="verifyPass_vvn(this);"><b>Log In</b></a>
                </div>
*/

function showCocoaDialog( ) {

  console.debug("_____________ DEBUG _____________: in /ShowDialog_cocoa()");
  var options = {
    height: 210,
    width: 250,
    resizable: false,
    draggable: false,
  };
  $("#pass_dialog_cocoa").show();
  $("#pass_dialog_cocoa").dialog(options);
}

function showVvnDialog( ) {

  console.debug("_____________ DEBUG _____________: in /ShowDialog_vvn()");
  var options = {
    height: 210,
    width: 250,
    resizable: false,
    draggable: false,
  };
  $("#pass_dialog_vvn").show();
  $("#pass_dialog_vvn").dialog(options);
}

function showApiDialog( ) {

  console.debug("_____________ DEBUG _____________: in /ShowDialog_api()");
  var options = {
    height: 210,
    width: 250,
    resizable: false,
    draggable: false,
  };
  $("#pass_dialog_api").show();
  $("#pass_dialog_api").dialog(options);
}

function requestPass_cocoa( ) {
  console.debug("_____________ DEBUG _____________: in /requestPass_cocoa()");
  var email = $('#email_input_cocoa').val();
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
        if (response['res']=='DUPLICATE') {
          alert('Email address already registered. Please use different email.');
        }
        if (response['res']=='OK') {
          console.debug(" $> Added user correctly ");
          alert('Email added, please check your inbox - or spam :) - for password.');
          $("#pass_dialog_cocoa").dialog("close");

          console.debug(" $> Done ");
        }
      },
      error: function() {
        alert('Authentication request failed. Please try again or contact me directly.');
      }
    });
  }
}

function requestPass_vvn( ) {
  console.debug("_____________ DEBUG _____________: in /requestPass_vvn()");
  var email = $('#email_input_vvn').val();
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
        if (response['res']=='DUPLICATE') {
          alert('Email address already registered. Please use different email.');
        }
        if (response['res']=='OK') {
          console.debug(" $> Added user correctly ");
          alert('Email added, please check your inbox - or spam :) - for password.');
          $("#pass_dialog_vvn").dialog("close");

          console.debug(" $> Done ");
        }
      },
      error: function() {
        alert('Authentication request failed. Please try again or contact me directly.');
      }
    });
  }
}

function requestPass_api( ) {
  console.debug("_____________ DEBUG _____________: in /requestPass_api()");
  var email = $('#email_input_api').val();
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
        if (response['res']=='DUPLICATE') {
          alert('Email address already registered. Please use different email.');
        }
        if (response['res']=='OK') {
          console.debug(" $> Added user correctly ");
          alert('Email added, please check your inbox - or spam :) - for password.');
          $("#pass_dialog_api").dialog("close");

          console.debug(" $> Done ");
        }
      },
      error: function() {
        alert('Authentication request failed. Please try again or contact me directly.');
      }
    });
  }
}

function verifyPass_cocoa( ) {
  console.debug("_____________ DEBUG _____________: in /verifyPass_cocoa()");
  var email = $('#email_input_cocoa').val();
  var pass  = $('#pass_input_cocoa').val();
  console.debug(" $> email content: [" + email + "]");
  console.debug(" $> pass content: [" + pass + "]");

  if( validateEmail(email) == false ) {
    alert('Please insert a valid email.')
  }else{

    $.ajax({
      url: "http://aws-ec2-cit-mronchi.org/check_pass/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({'email': email,'pass':pass}),
      dataType: "json",
      success: function( response ) {
        console.debug(response);
        if (response['res']=='AUTH') {
          console.debug(" $> User authenticated correctly ");
          //$('#hidden_cocoa').trigger('click');
          document.getElementById('my_iframe').src = './Dataset/cocoa_beta2015.zip';
          $("#pass_dialog_cocoa").dialog("close");
          console.debug(" $> Done ");
        } else {
          alert('Wrong email or password. Are you registered correctly? If you can\'t access please contact me directly.');
        }
      },
      error: function() {
        alert('Download request failed. Please try again or contact me directly.');
      }
    });
  }
}

function verifyPass_vvn( ) {
  console.debug("_____________ DEBUG _____________: in /verifyPass_vvn()");
  var email = $('#email_input_vvn').val();
  var pass  = $('#pass_input_vvn').val();
  console.debug(" $> email content: [" + email + "]");
  console.debug(" $> pass content: [" + pass + "]");

  if( validateEmail(email) == false ) {
    alert('Please insert a valid email.')
  }else{

    $.ajax({
      url: "http://aws-ec2-cit-mronchi.org/check_pass/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({'email': email,'pass':pass}),
      dataType: "json",
      success: function( response ) {
        console.debug(response);
        if (response['res']=='AUTH') {
          console.debug(" $> User authenticated correctly ");
          //$('#hidden_vvn').trigger('click');
          document.getElementById('my_iframe').src = './Dataset/visual_verbnet_beta2015.zip';
          $("#pass_dialog_vvn").dialog("close");
          console.debug(" $> Done ");
        } else {
          alert('Wrong email or password. Are you registered correctly? If you can\'t access please contact me directly.');
        }
      },
      error: function() {
        alert('Download request failed. Please try again or contact me directly.');
      }
    });
  }
}

function verifyPass_api( ) {
  console.debug("_____________ DEBUG _____________: in /verifyPass_api()");
  var email = $('#email_input_api').val();
  var pass  = $('#pass_input_api').val();
  console.debug(" $> email content: [" + email + "]");
  console.debug(" $> pass content: [" + pass + "]");

  if( validateEmail(email) == false ) {
    alert('Please insert a valid email.')
  }else{

    $.ajax({
      url: "http://aws-ec2-cit-mronchi.org/check_pass/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({'email': email,'pass':pass}),
      dataType: "json",
      success: function( response ) {
        console.debug(response);
        if (response['res']=='AUTH') {
          console.debug(" $> User authenticated correctly ");
          //$('#hidden_api').trigger('click');
          //document.getElementById('my_iframe').src = './Code/cocoa_api_beta2015.zip';
          alert('Api not ready yet. Sorry for the delay.');
          $("#pass_dialog_api").dialog("close");
          console.debug(" $> Done ");
        } else {
          alert('Wrong email or password. Are you registered correctly? If you can\'t access please contact me directly.');
        }
      },
      error: function() {
        alert('Download request failed. Please try again or contact me directly.');
      }
    });
  }
}

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/*
function Submit_cocoa( ) {
  console.debug("_____________ DEBUG _____________: in /SubmitDialog()");
  var pass = $('#feedback-text').val();
  console.debug(" $> text area content: [" + pass + "]");

  $.ajax({
    url: "http://aws-ec2-cit-mronchi.org/check_pass/",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({'pass_string': pass}),
    dataType: "json",
    success: function( response ) {
      if (response['res']!='OK') {
        alert('Please insert the correct password.');
      } else {
        console.debug(" $> Correct Pass ");
        // allow_download
        //$('#cocoa_hidden').trigger('click');
        window.location = $('#cocoa_hidden')[0].href;
        $("#dialog").dialog("close");

        console.debug(" $> Done ");
      }
    }
  });
}
*/

/*<a class="btn" type="button" href="Code/cocoaApi.zip" style="display:none" target="_blank" onclick="ga('send', 'event', 'Dataset', 'Download', 'Coco-a Api', 5)">
<b>Coco-a Api</b>
</a>
<a class="btn" type="button" id="hidden_vvn" href="Dataset/visual_verbnet_beta2015.zip" style="display:none" target="_blank" onclick="ga('send', 'event', 'Dataset', 'Download', 'VVN', 6)">
<b>Visual VerbNet</b>
</a>
<a class="btn" type="button" id="hidden_cocoa" href="Dataset/cocoa_beta2015.zip" style="display:none" target="_blank" onclick="ga('send', 'event', 'Dataset', 'Download', 'Coco-a Anns', 7)">
<b>Coco-a Dataset</b>
</a>
*/

