const { Sequelize } = require("sequelize");

const db = new Sequelize("school-app", "root", "", {
  host:"localhost",
  dialect:"mysql"
})

module.exports = db