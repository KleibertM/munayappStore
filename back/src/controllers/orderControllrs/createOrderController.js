const { Order } = require('../../db');
const createSaleController = require('../saleControllrs/createSaleControllrs');

const createOrderController = async (dataOrder) => {
    try {
        const orderArray = Array.isArray(dataOrder) ? dataOrder : [dataOrder];
        const user = orderArray[0].user_id ? orderArray[0].user_id : null;
        const order_pay = orderArray[0].order_payment;
        const orderData = orderArray.map((order) => {
            const ice = order.id_ice;
            const quantity = Number(order.ice_quantity)
            const price = parseFloat(order.order_price)
            const total = quantity * price;
            return {
                id_ice: ice,
                user_id: user,
                order_price: price,
                ice_quantity: quantity,
                order_date: new Date(),
                order_status: order.order_status,
                order_payment: order_pay,
                order_total: total
            }
        })
        // Crear el nuevo ice
        const newOrder = await Order.bulkCreate(orderData, { returning: true });
        //Metodo para crear slae cuando pague la orden
        const totalGeneral = newOrder.reduce((acc, order) => {
            return acc + parseFloat(order.order_total);
        }, 0);
        if (order_pay === 'complete') {
            const saleCreate = await createSaleController(newOrder, totalGeneral)
            return {
                message: 'Order and Sale created',
                Order: newOrder,
                totalGeneral: totalGeneral,
                data: saleCreate
            }
        } 
        return {
            Order: newOrder,
            totalGeneral: totalGeneral
        };
    } catch (error) {
        console.error("Error en el create ice Controllers: " + error.message);
        throw new Error("Error en el create ice Controllers: " + error.message);
    }
};

module.exports = createOrderController

