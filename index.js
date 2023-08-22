require("dotenv").config()
const express = require("express");
const app = express()
const cors = require("cors")
const corsConfig = require("./config/corsConfig")
const logger = require("./middleware/logger")
//middleware
app.use(cors(corsConfig))
app.use(express.json())
app.use(logger)

//API ROUTE
app.use("/api/v1", require("./routes/v1Route"))
app.all("*", (req,res)=>{
  res.status(404).json({"error": "Route not found"})
})

app.listen(process.env.PORT || 8000, ()=> console.log(`Running Server localhost:${process.env.PORT || 8000}`))