 var fly = $("#711");

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
    $("tbody").empty();
    fly.empty();
    for (var i = 0; i < data.length; i++) {
      var check = $("<button>");
      check.text("✓");
      check.addClass("complete btn btn-default");
      check.data("id",data[i].id);
      var newTd = $('<td>');
      newTd.append(check);
      var newTr = $("<tr>");
      // newTr.append("<h2>" + data[i].title + "</h2>");
      newTr.append("<td>" + data[i].tutor_name + "</td>");
      newTr.append("<td>" + data[i].time_avail + "</td>");
      newTr.append("<td>" + data[i].dates_avail + "</td>");
      newTr.append("<td>" + data[i].subject + "</td>");
      // newTr.append("<button class='delete' data-id='" + data[i].id + "'>DELETE material</button>");
      newTr.append(newTd);
      newTr.data("data", data);
      $("tbody").append(newTr);

    }

$(document).on('click', '.complete', function(event){
  var id = $(this).data("id");
  // var fly = $("#711");
  // fly.empty();
  var why = $(this).parent().parent().data("data");
  console.log(why[0].id);



  if($("#rat1").val().trim() && $("#rat2").val().trim() && $("#rat3").val().trim()){
  // alert('holabola');
  // var fly = $("#711");

   fly.prepend("<h3>" + "your appointment is confirmed with " + why[0].tutor_name + 
    " at " + why[0].time_avail + " on " + why[0].dates_avail + " at " + why[0].location + "</h3>")
  // Send an AJAX POST-request with jQuery
  // $.post("/api/new", newmaterial)
  //   .done(function(data) {
  //     console.log(data);
  //   });

  // Empty each input box by replacing the value with an empty string
  $("#rat1").val("");
  $("#rat2").val("");
  $("#rat3").val("");
  // $("#materials").val("");
  }
});


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
  // event.preventDefault();
  
  // Make a newmaterial object
  // var newmaterial = {
  //   title: $("#title").val().trim(),
  //   teacher: $("#teacher").val().trim(),
  //   subject: $("#subject").val().trim(),
  //   materials: $("#materials").val().trim()
  // };

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
