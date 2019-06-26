$(document).on("click", "p", function() {

    $("#notes").empty();

    var thisId = $(this).attr("data-id");
  
    // AJAX Calls using GET method for each news article

    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
    
    // Add note information

      .done(function(data) {
        console.log(data);
    
        // Article Title

        $("#notes").append("<h2>" + data.title + "</h2>");
        
        // User input to enter a new title
        
        $("#notes").append("<input id='titleinput' name='title' autocomplete = 'off'>");
        
        // A textarea to add a new note body
        
        $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
        
        // A button to submit a new note, with the id of the article saved to it
        
        $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        // If there's a note in the article

        if (data.note) {
        
            $("#titleinput").val(data.note.title);
        
            $("#bodyinput").val(data.note.body);
        }
      });
  });
 
 // User "Save Note" on click event

 $(document).on("click", "#savenote", function() {

    // Grab the id associated with the article from the submit button
    
    var thisId = $(this).attr("data-id");
  
    // AJAX POST method
    
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        
        title: $("#titleinput").val(),
        
        body: $("#bodyinput").val()
      }
    })

      .done(function(data) {
        console.log(data);
        $("#notes").empty();
      });
  
    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });