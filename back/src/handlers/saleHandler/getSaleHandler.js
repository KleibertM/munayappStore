const getSaleDataController = require("../../controllers/saleControllrs/getSaleControllrs")

const getSaleDataHandler = async (req, res) => {
    try {
        const response = await getSaleDataController()
        res.status(200).json(response)
    } catch (error) {
        console.error("Error al obtener data Sale:", error.message);
        return { message: "Error al obtener data Sale" };
    }
}

module.exports = getSaleDataHandler;