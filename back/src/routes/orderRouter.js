const {Router} = require('express');
const createOrderHandler = require('../handlers/orderHandler/createOrderHandler');
const getOrderDataHandler = require('../handlers/orderHandler/getOrderHandler');
const updateOrderHandler = require('../handlers/orderHandler/updateOrderHandler');
const orderRouter = Router()

orderRouter.post('/', createOrderHandler)
orderRouter.get('/',  getOrderDataHandler) 
orderRouter.patch('/update/:id', updateOrderHandler)

module.exports = orderRouter;