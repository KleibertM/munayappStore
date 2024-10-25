const getInvestController = require("../../controllers/investingController/getInvestingControllrs")

const getInvestHandler = async (req, res) => {
    try {
        const response = await getInvestController()
        res.status(200).json(response)
    } catch (error) {
        console.log("Error al obtener una Invest en Handler: " + error.message + cart);
        throw new Error("Error al obtener una Invest en Handler: " + error.message );
    }
}

module.exports = getInvestHandler;