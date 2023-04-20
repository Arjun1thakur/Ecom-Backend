const router=require('express').Router()
const {ProductSend,UniqueProductSend,ProductPost,FindCategory} = require('../controller/ProductController')

router.get('/store',ProductSend)
router.get('/store/:id',UniqueProductSend)
router.post('/store/upload',ProductPost)
router.get('/:id',FindCategory)


module.exports=router