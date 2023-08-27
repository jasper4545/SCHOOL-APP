require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;
//middleware
app.use(express.json())

//routes
app.use("/api/v1", require("./routes/v1Router"))

app.listen(PORT, ()=> console.log("Server running in http://localhost:"+PORT))