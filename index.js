const express =require('express')
const dotenv =require('dotenv')
dotenv.config()
const UserRoute=require('./routes/UserRoute')
const ProductRoute=require('./routes/ProductRoute')
const OrderRoute=require('./routes/OrderRoute')
const cors =require('cors')
const connection =require('./connection/database')


let app=express()
let PORT=process.env.PORT || 8000
app.use(cors({origin:"*"}))

app.use(express.json())
app.use('/',UserRoute)
app.use('/',OrderRoute)
app.use('/',ProductRoute)



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
    connection()
})