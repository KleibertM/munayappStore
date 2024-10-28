const createOrderController = require("../../controllers/orderControllrs/createOrderController")

const createOrderHandler = async (req, res) => {
    try {
        const dataOrder = req.body
        const response = await createOrderController(dataOrder)
        res.status(201).json(response)
    } catch (error) {
        console.log("Error al crear una order en Handler: " + error.message);
        throw new Error("Error al crear una order en Handler: " + error.message);
    }
}

module.exports = createOrderHandler;