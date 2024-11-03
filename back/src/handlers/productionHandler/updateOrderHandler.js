const updateOrderDataController = require("../../controllers/orderControllrs/updateOrderController");


const updateOrderHandler = async (req, res) => {
    const {id} = req.params
    console.log('order_id handler', id);
    const {newDataOrder} = req.body
    console.log('order_id handler', newDataOrder);
    if (!newDataOrder || typeof newDataOrder !== 'object') {
        return res.status(400).json({ message: "Datos no válidos para actualizar" });
    }
    try {
        const response = await updateOrderDataController(id, newDataOrder)
        res.status(200).json(response)
    } catch (error) {
        console.log("Error al actualizar una order en Handler: " + error.message);
        throw new Error("Error al actualizar una order en Handler: " + error.message);
    }
}

module.exports = updateOrderHandler;