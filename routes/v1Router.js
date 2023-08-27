const express = require("express")
const v1Router = express.Router()
const validateToken = require("../middleware/validateToken")
const verifyToken = require("../middleware/verifyToken")
const  { userLogin, getAllUser, registerUser, getProfile } = require("../controller/userController")
v1Router.route("/users")
  .get(verifyToken,getAllUser)
  
v1Router.route("/tokenCheck")
  .get(verifyToken,(req,res)=>{
    res.status(200).json({"success":true})
  })
v1Router.route("/users/login")
  .post(validateToken, userLogin)
v1Router.route("/users/register")
  .post(registerUser)

v1Router.route("users/profile")
  .get(getProfile)
  
module.exports = v1Router