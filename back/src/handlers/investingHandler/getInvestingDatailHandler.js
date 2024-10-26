const getDetailInvestController = require("../../controllers/investingController/getInvestingDatailControllrs")

const getDetailInvestHandler = async (req, res) => {
    const {investing_id} = req.params
    try {
        const response = await getDetailInvestController(investing_id)
        res.status(200).json(response)
    } catch (error) {
        console.log("Error al obtener una Invest en Controllers: " + error.message);
        throw new Error("Error al obtener una Invest en Controllers: " + error.message );
    }
}

module.exports = getDetailInvestHandler;