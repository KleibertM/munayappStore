const deleteOrderController = require("../../controllers/orderControllrs/deleteOrderController");

const deleteOrderHandler = async (req,res) => {
    const {order_id} = req.params
    try {
        const response = await deleteOrderController(order_id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        throw new Error(`Error al eliminar el helado en handler: ${error.message}`);
    }
}

module.exports = deleteOrderHandler;