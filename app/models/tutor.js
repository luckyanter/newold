
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("Tutor", {
    // Giving the Author model a name of type STRING
    tutor_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     subject: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
     dates_avail: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     time_avail: {
      type: Sequelize.TIME,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
  
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          // Tutor.belongsTo(models.Student, {
          //   onDelete: "cascade"
          // });
        }
      }
    });
  // return Tutor;
// };
 
Tutor.sync();

 module.exports = Tutor;