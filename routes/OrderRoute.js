const router=require('express').Router()
const OrderController = require('../controller/OrderController')
router.post('/orders',OrderController)


module.exports=router