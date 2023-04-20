const mongoose=require('mongoose')
const validator = require("validator");
let userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }  
},{
    timestamps:true
})

let userS=mongoose.model("Users",userSchema)
module.exports=userS
