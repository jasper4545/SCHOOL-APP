const jwt = require("jsonwebtoken")
const Cache = require("../config/cache")
const validateToken = (req,res,next)=>{
  try{
  const token = jwt.sign({"username":req.body.username, "password": req.body.password}, process.env.LOGIN_TOKEN, {expiresIn: "5m"})
  Cache.set("jwt", token)
  next()
  }catch(e){
    console.log("error on token")
    res.status(500).json({"error token": e})
  }
}

module.exports = validateToken