
const logger = (req,res,next)=>{
  const body = req.body
  const log = `[ ${req.method} ]   ${req.url}   ${req.headers.origin || "android app"}   ${body || "no body" }`
  console.log(log)
  next()
}

module.exports = logger