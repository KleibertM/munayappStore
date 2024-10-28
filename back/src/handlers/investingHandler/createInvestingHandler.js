const createInvestController = require("../../controllers/investingController/createInvestingControllrs");

const createInvestHandler = async (req, res) => {
    try {
        const dataInvest = req.body
        
        const response = await createInvestController(dataInvest)
        res.status(201).json(response);
    } catch (error) {
        console.log("Error al crear una Invest en Handler: " + error.message);
        throw new Error("Error al crear una Invest en Handler: " + error.message);
    }
}

module.exports = createInvestHandler;