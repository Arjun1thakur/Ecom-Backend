const router=require('express').Router()
const {Signup,login} = require('../controller/UserController')
const check = require('../middleware/checkMiddleware')

router.post('/signup',Signup)
router.post('/signin',login)

module.exports=router