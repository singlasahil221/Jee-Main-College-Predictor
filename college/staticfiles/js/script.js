var counter = 0;
    //var  oForm = document.forms[counter];
jQuery(function(){
    jQuery('a.add-field').click(function(event){
        event.preventDefault();
        //var name = oForm.elements["name"].value;
        counter=counter+1;
        var row = '<input type = "text"'+'id=question'+counter+' class = "question" name="branch[]" placeholder = "branch">&nbsp;<br><select><option value="General">General</option><option value="OBC NCL">OBC NCL</option><option value="SC">SC</option><option value="ST">ST</option></select><input type = "number" name = "rank[]" id = "question1" placeholder = "ranks"><br><select><option value="General">General</option><option value="OBC NCL">OBC NCL</option><option value="SC">SC</option><option value="ST">ST</option></select><input type = "number" name = "rank[]" id = "question2" placeholder = "ranks"><br><select><option value="General">General</option><option value="OBC NCL">OBC NCL</option><option value="SC">SC</option><option value="ST">ST</option>/select><input type = "number" name = "rank[]" id = "question3" placeholder = "ranks"><br><select><option value="General">General</option><option value="OBC NCL">OBC NCL</option><option value="SC">SC</option><option value="ST">ST</option></select><input type = "number" name = "rank[]" id = "question4" placeholder = "ranks"><br><br>';
        var newRow = jQuery(row);
        jQuery('div.main1').append(newRow);
    });
});
