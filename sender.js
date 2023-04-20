let mongoose=require("mongoose")
require("dotenv").config()
let usersData=require("./Sample-Data/userSample")
let ProductData=require("./Sample-Data/productSample")
let Auth=require("./models/Users")
let Product=require("./models/products")
// let Orders=require("./models/Orders")
let connection=require("./connection/database")


connection();

const importData=async ()=>{
    try {
        // await Orders.deleteMany()
        await Product.deleteMany()
        await Auth.deleteMany()
        const createUser= await Auth.insertMany(usersData)
        const MainUser= createUser[0]._id
        const sampleData=ProductData.map(data=>{
            return{...data,User:MainUser}
        })
        await Product.insertMany(sampleData)
        console.log('done')
        process.exit()
    } catch (error) {
        console.log("Sender",error)
        process.exit()
    }
}
const replaceData=async ()=>{
    try {
        // await Orders.deleteMany()
        await Product.deleteMany()
        await Auth.deleteMany()        
        console.log('done')
        process.exit()
    } catch (error) {
        console.log("Sender",error)
        process.exit()
    }
}

if(process.argv[2]==="-d"){
    replaceData()
}else{
    importData()
}