const getDetailIceController = require("../../controllers/iceControllrs/getIceDetailController")

const getDetailIceHandler = async (req, res) => {
    const {id_ice} = req.params
    try {
        const response = await getDetailIceController(id_ice)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getDetailIceHandler;