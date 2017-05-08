
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Awesome = sequelize.define("material", {
  title: {
    type: Sequelize.STRING
  },
  teacher: {
    type: Sequelize.STRING
  },
  subject: {
    type: Sequelize.STRING
  },
  materials: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

Awesome.sync();

module.exports = Awesome;
