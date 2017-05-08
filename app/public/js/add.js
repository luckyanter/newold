
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newmaterial object
  var newmaterial = {
    title: $("#title").val().trim(),
    teacher: $("#teacher").val().trim(),
    subject: $("#subject").val().trim(),
    materials: $("#materials").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newmaterial)
    .done(function(data) {
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#teacher").val("");
  $("#subject").val("");
  $("#materials").val("");

});
