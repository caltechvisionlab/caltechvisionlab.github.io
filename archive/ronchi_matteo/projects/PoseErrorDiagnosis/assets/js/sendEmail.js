function sendEmail( option ) {
    
    
    if (option == 1) {
		var link = "mailto:mronchi@caltech.edu" + "?cc=perona@caltech.edu" + "&subject=" + escape("Benchmarking and Error Diagnosis in Multi-Instance Pose Estimation - Email from Website") + "&body=" + escape(document.getElementById('email-text').value);
		window.location.href = link;
	}
	
	if (option == 2) {
		var link = "https://mail.google.com/mail/u/0/?view=cm&fs=1" + "&to=mronchi@caltech.edu" + "&cc=perona@caltech.edu" + "&su=" + escape("Benchmarking and Error Diagnosis in Multi-Instance Pose Estimation - Email from Website") + "&body=" + escape(document.getElementById('email-text').value);
		var win = window.open( link, "_blank" );
	}
	
	if (option == 3) {
		var link = "http://compose.mail.yahoo.com/" + "?to=mronchi@caltech.edu" + "&cc=perona@caltech.edu" + "&subj=" + escape("Benchmarking and Error Diagnosis in Multi-Instance Pose Estimation - Email from Website") + "&body=" + escape(document.getElementById('email-text').value);
		var win = window.open( link, "_blank" );
	}

    
}
