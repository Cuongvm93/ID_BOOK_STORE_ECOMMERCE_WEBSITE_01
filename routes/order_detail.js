const {getOrderDetail,deleteOrderDetail,createOrderDetail}=require ('../controller/Orderdetail.controller')
const {veryfiToken}=require('../middleware/verifyToken')
const router=require('express').Router()
router.get('/',veryfiToken, createOrderDetail)
router.get('/:id',veryfiToken,getOrderDetail)
router.delete('/:id',veryfiToken,deleteOrderDetail)
module.exports=router