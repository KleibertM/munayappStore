const {Order} = require('../../db');

const updateOrderDataController = async (id, newDataOrder) => {
    console.log('order_id controller', id);
    try {
        const data = await Order.findByPk(id)
        if (!data) {
            throw new Error('La order no existe');
        }
        await Order.update(newDataOrder, {
            where: { order_id: id }
        });
        const updatedOrder = await Order.findByPk(id);
        return { message: "Datos actualizado exitosamente", updatedOrder };
    } catch (error) {
        console.error("Error al actualizar la order:", error.message);
      return { message: "Error al actualizar la order" };
    }
}

module.exports = updateOrderDataController;