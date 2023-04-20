const mongoose=require('mongoose')

let Rating=mongoose.Schema({
    rate:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})

let productSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    },
    title:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:[Rating]
})

let Products=mongoose.model("product",productSchema)
module.exports=Products
