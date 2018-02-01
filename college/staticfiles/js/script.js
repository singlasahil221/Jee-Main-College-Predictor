var counter = 0;
    //var  oForm = document.forms[counter];
jQuery(function(){
    jQuery('a.add-field').click(function(event){
        event.preventDefault();
        //var name = oForm.elements["name"].value;
        counter=counter+1;
        var row = '<input type = "text"'+'id=question'+counter+' class = "question" name="branch[]" placeholder = "branch">&nbsp;<br><input type = "text" name = "category[]" id = "question1" placeholder = "category"><input type = "number" name = "rank[]" id = "question1" placeholder = "ranks"><br><input type = "text" name = "category[]" id = "question2" placeholder = "category"><input type = "number" name = "rank[]" id = "question2" placeholder = "ranks"><br><input type = "text" name = "category[]" id = "question3" placeholder = "category"><input type = "number" name = "rank[]" id = "question3" placeholder = "ranks"><br><input type = "text" name = "category[]" id = "question4" placeholder = "category"><input type = "number" name = "rank[]" id = "question4" placeholder = "ranks">&nbsp;<br>';
        var newRow = jQuery(row);
        jQuery('div.main1').append(newRow);
    });
});