const { Order } = require('../../db');
const createSaleController = require('../saleControllrs/createSaleControllrs');

const updateOrderDataController = async (id, newDataOrder) => {
    console.log('order_id controller', id);
    try {
        const data = await Order.findByPk(id)
        if (!data) {
            throw new Error('La order no existe');
        }
        const wasPaymentComplete = data.order_payment === 'complete';
        const isPaymentComplete = newDataOrder.order_payment === 'complete';
        await Order.update(newDataOrder, {
            where: { order_id: id }
        });
        const newOrder = await Order.findByPk(id);
        // Si el pago cambió a "complete" (antes no lo era), crea la venta (sale)
        if (!wasPaymentComplete && isPaymentComplete) {
            const totalGeneral = newOrder.order_total;
            const saleCreate = await createSaleController(newOrder, totalGeneral);
            return {
                message: "Datos actualizados y Sale creada exitosamente",
                newOrder,
                saleData: saleCreate,
            };
        }
        return { message: "Datos actualizado exitosamente", newOrder };
    } catch (error) {
        console.error("Error al actualizar la order:", error.message);
        return { message: "Error al actualizar la order" };
    }
}

module.exports = updateOrderDataController;