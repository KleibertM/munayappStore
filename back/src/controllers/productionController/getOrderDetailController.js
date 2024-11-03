const {Order} = require('../../db');
const getDetailOrderController = async (id)=> {
    
    const detailIce = await Order.findByPk(id)
    if (!detailIce) {
        throw new Error('La orden no existe');
    }

    const data = await detailIce.toJSON();
    console.log('Data de Order detail', data);
    
    const user = data.user_id ? data.user_id : null;
    const dataOrder = {
        id_ice: data.id_ice,
        user_id: user,
        order_price: data.order_price,
        ice_quantity: data.ice_quantity,
        order_date: data.order_date,
        order_status: data.order_status,
        order_payment: data.order_payment,
        order_total: data.order_total,
    }
    return dataOrder;
}
module.exports = getDetailOrderController;