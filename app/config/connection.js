
var Sequelize = require("sequelize");

var sequelize = new Sequelize("tutors", "root", "root", {
  port:8889,
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
