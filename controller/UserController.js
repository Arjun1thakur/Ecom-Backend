let userS=require("../models/Users")
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
let login=async(req,res)=>{
    try{
        let {email,password}=req.body
        let user=await userS.findOne({email:email})
        let pass=await bcrypt.compare(password,user.password)
        if(!pass){
            return res.status(200).json({user:pass})
        }else{
            return res.status(200).json({user:user})
        }
    }catch(error){
        console.log(`UserController login    -->   ${error}`)
        return res.status(500).json({'message':error})
    }
}
let Signup=async(req,res)=>{
    try{
        let {name,email,password}=req.body
        let pass=await bcrypt.hash(password,10)
        let token=jwt.sign({name,email,password:pass},process.env.JWT_TOKEN)
        let users=await userS.insertMany({name,email,password:pass,token:token})
        return res.status(200).json(users)
    }catch(error){
        console.log(`UserController Signup    -->   ${error}`)
        return res.status(500).json({'message':error})
    }
}
module.exports={Signup,login}