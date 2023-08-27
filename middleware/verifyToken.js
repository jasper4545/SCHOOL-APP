const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
  jwt.verify(req.headers.token, process.env.LOGIN_TOKEN, async (err, decoded)=>{
    if(err) return res.status(401).json({"message": `${err}`, "success": false})
    next()
  })
}

module.exports = verifyToken