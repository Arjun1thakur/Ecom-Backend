let orderSchema=require("../models/Order")
let orderSendController=async(req,res)=>{
    let {User,OrderItem,Address,payment}=req.body
    try{
        let Order=await orderSchema.insertMany({User,OrderItem,Address,payment})
        return res.status(200).json(Order)
    }catch(error){
        console.log(error,'from UserControler')
        return res.status(500).json({'message':'fail'})
    }
}
module.exports=orderSendController