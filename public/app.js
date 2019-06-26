// Get method for each JSON Object

$.getJSON("/articles", function(data) {

    // For Loop on each JSON Object
    
    for (var i = 0; i < data.length; i++) {

      // Render the data on the page with JQuery Object by ID Calls

      $("#articles").append("<p>" + data[i].title + "<br />" + data[i].link + "</p>" + "<button data-id='" + data[i]._id + "'>save article</button>");

    }

  });
  
  // Create User "On Click Events" for each "P Tag"
 
  $( "#articles").on("click", "button", function() {
    var articleId = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/articles/" + articleId
    }).then(function(response){
      console.log(response);
    })
  });

  
  
 