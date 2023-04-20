const jwt=require('jsonwebtoken')
const userModel=require('../models/Users')


let check=async(req,res,next)=>{
    let token=req.headers.authorization
    if(token){
        try {
            token=req.headers.authorization.split(" ")[1]
            const decry=jwt.verify(token,process.env.JWT_TOKEN)
            req.user=await userModel.find({email:decry.email}).select("-password")
            console.log(req.user)
        }catch(error){
            res.status(400).message({"error":error})
        }
    }else{
        res.status(400).json({"error":"Not Authorized,not valid token"})
    }
    next()
}

module.exports=check