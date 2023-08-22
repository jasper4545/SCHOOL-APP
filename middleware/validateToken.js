const jwt = require("jsonwebtoken")

function validateToken(req,res,next){
  try{
  const { username, password } = req.body
  const token = jwt.sign({username,password}, process.env.LOGIN_TOKEN, {expiresIn: "60s"})
  req.token = token
  next()
  }catch(e){
    res.status(500).json({"message": `${e}`})
  }
}

module.exports = validateToken