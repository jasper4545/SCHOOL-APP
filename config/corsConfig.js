
const corsConfig ={
  origin: (origin, callback)=>{
    if(origin == "http:localhost:7700" || !origin) callback(null, true)
  }
}