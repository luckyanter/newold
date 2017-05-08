
// Make a get request to our api route that will return every material
$.get("/api/all", function(data) {
  // For each material that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold material data
    var hola = $("<div>");
    // Add a class to this div: 'well'
    hola.addClass("well");
    // Add an id to the well to mark which well it is
    hola.attr("id", "material-well-" + i);
    // Append the well to the well section
    $("#well-section").append(hola);

    // material  we add our material data to the well we just placed on the page
    $("#material-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#material-well-" + i).append("<h3>teacher: " + data[i].teacher + "</h4>");
    $("#material-well-" + i).append("<h3>subject: " + data[i].subject + "</h4>");
    $("#material-well-" + i).append("<h3>materials: " + data[i].materials + "</h4>");
  }
});
