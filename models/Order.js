const mongoose=require('mongoose')


let ordersSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    OrderItem:[
        {
        Name:{
            type:String,
            required:true
        },
        Qyt:{
            type:Number,
            required:true 
        },
        Price:{
            type:Number,
            required:true 
        },
        Product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"product"
        }
        }
    ],
    Address:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    }
},{timestamps:true})

let Orders=mongoose.model("Orders",ordersSchema)
module.exports=Orders
