const Cache = require("../config/cache")

const sendCache = (req,res,next)=>{
  const data = Cache.get(req.url);
  if(data){
    console.log("sending cache data")
    const newData = JSON.parse(data)
    return res.status(200).json({"success":true, "isCache": true, newData})
  }
  next()
}
module.exports = sendCache