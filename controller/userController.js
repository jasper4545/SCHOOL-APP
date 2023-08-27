const usersDB = require("../model/userDB")
const Cache = require("../config/cache")
const path = require("path")
const fs = require("fs")
const userLogin = async (req,res)=>{
  const { username, password } = req.body;
  if(!username || !password) return res.status(300).json({"message": "all fields are required", "error": "All fields require"})
  try{
    const getRes = await usersDB.findAll({
      where:{"username":username, "password": password}
    });
    res.cookie("name", "jasper", {maxAge: 1*1000*60, httpOnly:true})
    if(getRes && getRes.length === 0) return res.status(301).json({"message":"no such user", "noUser":true})
    res.status(200).json({"success": true, "message":"you are successfully login", "token": Cache.get("jwt"), "user": getRes.dataValues})
  }catch(e){
    console.log("error: "+e)
    res.status(500).json({"error": e, "message": "Server Error on Database"})
  }
}

const getAllUser = async(req,res)=>{
  try{
    const getRes = await usersDB.findAll();
    Cache.set(req.url, JSON.stringify(getRes))
    res.status(200).json({"success":true, "users": getRes})
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
function getProfile(req,res){
  console.log(req.cookies.name)
  const filePath = path.join(__dirname,"..","client","img", "2222-Japee-1692876322610-gettyimages-171271182-170667a.jpg");
  if(fs.existsSync(filePath)){
    return res.sendFile(filePath)
  }
  res.sendStatus(404)
}

module.exports = { userLogin, getAllUser, registerUser, getProfile }