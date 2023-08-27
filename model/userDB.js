const db = require("../model/db")
const { DataTypes } = require("sequelize")

const userDB = db.define("users", {
  fullname:{
    type:DataTypes.STRING,
    allownull:false
  },
   username:{
     type: DataTypes.STRING,
     allownull:false
   },
   password:{
     type:DataTypes.STRING,
     allownull:false
   }
})

module.exports = userDB