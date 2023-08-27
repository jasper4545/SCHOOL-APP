const express = require("express")
const v1Router = express.Router()
const  { userLogin, getAllUser, registerUser, getProfile } = require("../controller/userController")
v1Router.route("/users")
  .get(getAllUser)
  
v1Router.route("/users/register")
  .post(registerUser)

v1Router.route("users/profile")
  .get(getProfile)
  
module.exports = v1Router