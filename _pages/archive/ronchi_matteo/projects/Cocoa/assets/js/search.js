function Search() {
    console.debug("Pressed Search Button: [" + $('#search_bar_input').val() + "]");
    
    // submit a query to a server
    $.ajax({
      url: "/mturk_visual_verbs_subjects/GetVisualVerbs/", 
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({'verbNet_class': visual_verbNet_classes[trial_num]}),
      dataType: "json",
      success: function( response ) {                  
        console.debug("_____________ DEBUG _____________: in /GetVisualVerbs()/success");
        console.debug("   $> : verbNet class predicates: " + response['predicates']);
                        
        var class_title_html = '<p><b>' + verbNet_classes_nice[trial_num] +'</b>: ' + verbNet_classes_description[trial_num] + '</p>';
        $('#paragraph_manually_add').html('Use the box below to add a custom annotation only if you are not able to describe the <b>' + verbNet_classes_nice[trial_num] + '</b> with any of the predicates above.');        var predicates = JSON.parse(data['predicates']);
      }
    });

    // return a list of image_id subject_id object_id containing the result  
}
