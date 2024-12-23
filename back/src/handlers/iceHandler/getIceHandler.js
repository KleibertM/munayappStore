const getIceDataController = require("../../controllers/iceControllrs/getIceController");

const getIceDataHandler = async (req, res) => {
    try {
        const response = await getIceDataController();
        res.status(201).json(response);
    } catch (error) {
        console.log("Error obteniendo ice")
        res.status(400).json({error: error.message})
    }
}

module.exports = getIceDataHandler;