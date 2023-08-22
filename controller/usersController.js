const usersDB = require("../model/usersDB")


const userLogin = async (req,res)=>{
  const { username, password } = req.body;
  if(!username || !password) return res.status(300).json({"message": "all fields are required", "error": "All fields require"})
  try{
    const getRes = await usersDB.findAll({
      where:{"username":username, "password": password}
    });
    if(getRes && getRes.length === 0) return res.status(301).json({"message":"no such user", "noUser":true})
    res.status(200).json({"success": true, "message":"you are successfully login", "token": req.token})
  }catch(e){
    res.status(500).json({"error": e, "message": "Server Error"})
  }
}

const getAllUser = async(req,res)=>{
  try{
    const getRes = await usersDB.findAll();
    res.status(200).json({"success":true, "message": getRes})
  }catch(e){
    res.status(500).json({"message": "Server Error on database", "Error": e})
  }
}
const registerUser = async(req,res)=>{
  const { username, password } = req.body;
  try{
    const users = await usersDB.create({
      "username": username,
      "password": password
    })
    if(users) return res.sendStatus(200)
  }catch(e){
    res.status(500).json({"Error": e})
  }
}

module.exports = { userLogin, getAllUser, registerUser }