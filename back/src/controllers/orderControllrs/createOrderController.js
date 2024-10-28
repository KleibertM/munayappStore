const { Order, Sale } = require('../../db');

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
            for (const order of newOrder) {
                const dataSale = {
                    order_id: order.order_id,
                    sale_date: new Date(),
                    sale_total: totalGeneral
                };
                console.log('data para crea Sale', dataSale);
                if (!dataSale || dataSale.length === 0) {
                    console.log("falta datos para crear una Sale: " + error.message + dataSale);
                    throw new Error("falta datos para crear una Sale: " + error.message);
                }
                const newSale = await Sale.create(dataSale)
                return { message: 'Nueva Sale creada', data: newSale }
            }
        } else {
            console.log('Orden no pagada', newOrder);
            return {
                message: 'Orden no pagada',
                data: newOrder
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

