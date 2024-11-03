const getDetailOrderController = require("../../controllers/orderControllrs/getOrderDetailController");

const getDetailOrderHandler = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    try {
        const response = await getDetailOrderController(id)
        return res.status(200).json(response);
    } catch (error) {
        console.log("Error al obtener una order detail en Handler: " + error.message);
        throw new Error("Error al obtener una order detail en Handler: " + error.message);
    }
}

module.exports = getDetailOrderHandler;