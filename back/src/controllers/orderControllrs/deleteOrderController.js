const {Order} = require('../../db');
const deleteOrderController = async (order_id) => {
    const OrderDelete = await Order.findByPk(order_id)

    try {
        if (OrderDelete){
            const Order = await Order.destroy({
                where: {
                    order_id
                },
            })

            if (Order) {console.log({message: 'delete Order'});
            return Order}
            else {
                throw new Error('No se pudo eliminar el Order')
            }
            
        } 
        else {
            throw new Error('El Order no existe')
        }
    } catch (error) {
        console.log(error.message);
        throw new Error(`Error al eliminar el helado: ${error.message}`);
    }
}

module.exports = deleteOrderController;