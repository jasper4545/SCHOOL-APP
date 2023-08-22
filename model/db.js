const sequel = require("sequelize");

const db = new sequel.Sequelize("sql6641216", "sql6641216","Vlb2LyYcyy", {
  host:"sql6.freemysqlhosting.net",
  port: 3306,
  dialect: "mysql",
  logging:false
})

module.exports = db