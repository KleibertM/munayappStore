const getOrderDataController = require("../../controllers/orderControllrs/getOrderController");

const getOrderDataHandler = async (req, res) => {
    
    try {
        const response = await getOrderDataController()
        res.status(200).json(response)
    } catch (error) {
        console.log("Error al obtener una order en Handler: " + error.message);
        throw new Error("Error al obtener una order en Handler: " + error.message);
    }
}

module.exports = getOrderDataHandler;