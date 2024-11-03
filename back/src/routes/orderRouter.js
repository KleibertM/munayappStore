const {Router} = require('express');
const createOrderHandler = require('../handlers/orderHandler/createOrderHandler');
const getOrderDataHandler = require('../handlers/orderHandler/getOrderHandler');
const updateOrderHandler = require('../handlers/orderHandler/updateOrderHandler');
const deleteOrderHandler = require('../handlers/orderHandler/deleteOrderHandler');
const getDetailOrderHandler = require('../handlers/orderHandler/getOrderDetailHandler');
const orderRouter = Router()

orderRouter.get('/',  getOrderDataHandler)
orderRouter.get('/detail/:id',  getDetailOrderHandler)
orderRouter.post('/', createOrderHandler)
orderRouter.patch('/update/:id', updateOrderHandler)
orderRouter.delete('/:id', deleteOrderHandler)

module.exports = orderRouter;