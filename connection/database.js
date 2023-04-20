const mongoose= require('mongoose')
let URL=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@e-commerce.xk7id52.mongodb.net/E-com?retryWrites=true&w=majority`

let connection=async()=>{
    try {
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('DB connected')
    } catch(error){
        console.log(`database.js  -->  ${error}`)
    }
}

module.exports=connection