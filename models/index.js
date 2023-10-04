const  sequelize  = require("../config/db");
const { DataTypes,Sequelize  } = require('sequelize');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize
  .sync({ force: false   })
  .then((result) => {
    console.log("yes you are sync");
  }     )
  .catch((err) => {
    console.log(err);
  });
  
db.users = require('./Users')(sequelize,DataTypes )  
module.exports = db;
