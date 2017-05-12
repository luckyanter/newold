// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the material they typed into the material-search input
  var materialSearched = $("#material-search").val().trim();

  // Make an AJAX get request to our api, including the user's material in the url
  $.get("/api/" + materialSearched, function(data) {

    console.log(data);
    // Call our rendermaterials function to add our materials to the page
    rendermaterials(data);

  });

});

// When user hits the teacher-search-btn
$("#teacher-search-btn").on("click", function() {

  // Save the teacherthey typed into the teacher-search input
  var teacherSearched = $("#teacher-search").val().trim();

  // Make an AJAX get request to our api, including the user's teacher in the url
  $.get("/api/teacher/" + teacherSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our rendermaterials function to add our materials to the page
    rendermaterials(data);

  });

});

// When user hits the subject-search-btn
$("#subject-search-btn").on("click", function() {

  // Save the material they typed into the subject-search input
  var subjectSearched = $("#subject-search").val().trim();

  // Make an AJAX get request to our api, including the user's subject in the url
  $.get("/api/subject/" + subjectSearched, function(data) {

    console.log(data);
    // Call our rendermaterials function to add our materials to the page
    rendermaterials(data);

  });

});

function rendermaterials(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].id + "</h2>");
      div.append("<p>teacher: " + data[i].tutor + "</p>");
      div.append("<p>subject: " + data[i].subject + "</p>");
      div.append("<p>materials: " + data[i].date_avail + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE material</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .done(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });
    
      $(this).closest("div").remove();

    });

  }
}
