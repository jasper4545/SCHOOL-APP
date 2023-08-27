require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;
const cors = require("cors")
//middleware
app.use(cors())
app.use(express.json())

//routes
app.use("/api/v1", require("./routes/v1Router"))
//hi po 
app.listen(PORT, ()=> console.log("Server running in http://localhost:"+PORT))