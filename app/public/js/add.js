$("#mySelect").on("change", function() {
 var cat = $("#mySelect").val();
 if(cat){
    $.get("/api/" + cat, function(data){
    console.log(data);
    rendermaterials(data);
  });
  }
});

function rendermaterials(data) {
  if (data.length !== 0) {

    // $("#hey").empty();
    // $("#hey").show();

    for (var i = 0; i < data.length; i++) {

    var check = $("<button>");
    check.text("✓");
    check.attr("data",data[i].id);
    var newTd = $('<td>');
    newTd.append(check);
    
      var newTr = $("<tr>");
      // newTr.append("<h2>" + data[i].title + "</h2>");
      newTr.append("<td>" + data[i].teacher + "</td>");
      newTr.append("<td>" + data[i].subject + "</td>");
      newTr.append("<td>" + data[i].materials + "</td>");
      // newTr.append("<td>" + check + "</td>");
      newTr.append(newTd);
      $("tbody").append(newTr);

    }



    // $(".delete").click(function() {

    //   var info = {
    //     id: $(this).attr("data-id")
    //   };

    //   $.post("/api/delete", info)
    //     // On success, run the following code
    //     .done(function(deldata) {
    //       // Log the data we found
    //       console.log(deldata);
    //       console.log("Deleted Successfully!");
    //     });
    
    //   $(this).closest("div").remove();

    // });

  }
}





// $("#subject-search-btn").on("click", function() {

//   // Save the material they typed into the subject-search input
//   var subjectSearched = $("#subject-search").val().trim();

//   // Make an AJAX get request to our api, including the user's subject in the url
//   $.get("/api/subject/" + subjectSearched, function(data) {

//     console.log(data);
//     // Call our rendermaterials function to add our materials to the page
//     rendermaterials(data);

//   });

// });


// $("#add-btn").on("click", function(event) {
//   event.preventDefault();

//   // Make a newmaterial object
//   var newmaterial = {
//     title: $("#title").val().trim(),
//     teacher: $("#teacher").val().trim(),
//     subject: $("#subject").val().trim(),
//     materials: $("#materials").val().trim()
//   };

//   // Send an AJAX POST-request with jQuery
//   $.post("/api/new", newmaterial)
//     .done(function(data) {
//       console.log(data);
//     });

//   // Empty each input box by replacing the value with an empty string
//   $("#title").val("");
//   $("#teacher").val("");
//   $("#subject").val("");
//   $("#materials").val("");

// });
