const createProductionController = require("../../controllers/productionController/createProductionController");

const createProductionHandler = async (req, res) => {
    try {
        const dataProduction = req.body
        const response = await createProductionController(dataProduction)
        res.status(201).json(response)
    } catch (error) {
        console.log("Error al crear una production en Handler: " + error.message);
        throw new Error("Error al crear una production en Handler: " + error.message);
    }
}

module.exports = createProductionHandler;