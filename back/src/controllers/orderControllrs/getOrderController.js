const {Order} = require('../../db');
const getOrderDataController = async () => {
    try {
        const allOrder = await Order.findAll()
        if (!allOrder || !allOrder.length) {
            console.log(error, "No hay datos de allOrder disponibles");
            throw new Error('No hay datos de llOrder disponibles');
        }
        return {data: allOrder}
    } catch (error) {
        throw new Error({ message: "No hay data en DB" });
    }
}

module.exports = getOrderDataController