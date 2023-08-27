const multer = require("multer")
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, "client/img")
  },
  filename: (req,file, cb)=>{
    const { name, id } = req.headers
    cb(null, `${id}-${name}-${Date.now()}-${file.originalname}`)
  }
});
const upload = multer({storage})

module.exports = upload