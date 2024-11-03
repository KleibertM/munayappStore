const {Order} = require('../../db');
const deleteOrderController = async (id) => {
    const orderDelete = await Order.findByPk(id)
    try {
        if (orderDelete){
            const deleteOrder = await Order.destroy({
                where: {
                    order_id: id
                },
            })
            if (deleteOrder) {console.log({message: 'delete Order'});
            return deleteOrder}
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