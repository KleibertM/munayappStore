const deleteOrderController = require("../../controllers/orderControllrs/deleteOrderController");

const deleteOrderHandler = async (req,res) => {
    const {id} = req.params
    console.log('id deleted',id);
    try {
        const response = await deleteOrderController(id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        throw new Error(`Error al eliminar la orden en handler: ${error.message}`);
    }
}

module.exports = deleteOrderHandler;