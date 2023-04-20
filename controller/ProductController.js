let productSchema=require("../models/products")
let ProductSend=async(req,res)=>{
    try{
        let products=await productSchema.find({})
        return res.status(200).json(products)
    }catch(error){
        console.log(error,'from UserControler')
        return res.status(500).json({'message':error})
    }
}

let UniqueProductSend=async(req,res)=>{
    let val=req.params.id
    try{
        let products=await productSchema.find({_id:val})
        return res.status(200).json(products)
    }catch(error){
        console.log(error,'from UserControler')
        return res.status(500).json({'message':error})
    }
}

let FindCategory=async(req,res)=>{
    let val=req.params.id
    try{
        let products=await productSchema.find({category:val})
        return res.status(200).json(products)
    }catch(error){
        console.log(error,'from UserControler')
        return res.status(500).json({'message':error})
    }
}

let ProductPost=async(req,res)=>{
    let {User,title,brand,price,description,category,image,rating}=req.body
    try{
        let products=await productSchema.insertMany({User,title,brand,price,description,category,image,rating})
        return res.status(200).json(products)
    }catch(error){
        console.log(error,'from UserControler')
        return res.status(500).json({'message':error})
    }
}
module.exports={ProductSend,UniqueProductSend,ProductPost,FindCategory}