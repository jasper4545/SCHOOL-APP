const express = require("express");
const v1Route = express.Router();
const { userLogin, getAllUser, registerUser } = require("../controller/usersController");
const validateToken = require("../middleware/validateToken")


v1Route.route("/")
  .get((req,res)=>{
    res.status(200).json({"message": "welcome to my school-api"})
  })
  
v1Route.route("/users")
  .get(getAllUser)
  
v1Route.route("/users/login")
  .post(validateToken,userLogin)

v1Route.route("/users/register")
.post(registerUser)
  
  
  
module.exports = v1Route