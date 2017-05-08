
var Awesome = require("../models/material.js");

module.exports = function(app) {

  // Get all materials
  app.get("/api/all", function(req, res) {

    Awesome.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Get a specific material
  app.get("/api/:material", function(req, res) {

    if (req.params.material) {
      Awesome.findAll({
        where: {
          title: req.params.material
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all materials of a specific subject
  app.get("/api/subject/:subject", function(req, res) {

    if (req.params.subject) {
      Awesome.findAll({
        where: {
          subject: req.params.subject
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all materials from a specific teacher
  app.get("/api/teacher/:teacher", function(req, res) {

    if (req.params.teacher) {
      Awesome.findAll({
        where: {
          teacher: req.params.teacher
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });


  app.post("/api/new", function(req, res) {

    console.log("Awesome Data:");
    console.log(req.body);
    Awesome.create({
      title: req.body.title,
      teacher: req.body.teacher,
      subject: req.body.subject,
      materials: req.body.materials
    });

  });

  // Delete a material from the database
  app.post("/api/delete", function(req, res) {

    console.log("Awesome Data:");
    console.log(req.body);
    Awesome.destroy({
      where: {
        id: req.body.id
      }
    });

  });

};
