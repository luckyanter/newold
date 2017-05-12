
var Sequelize = require("sequelize");

var sequelize = new Sequelize("tutormatch_db", "root", "root", {
  port:8889,
  host: "localhost",
  dialect: "mysql",
  define: {
        timestamps: false
    },

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
