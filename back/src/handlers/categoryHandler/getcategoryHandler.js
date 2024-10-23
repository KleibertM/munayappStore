const getCategoryController = require("../../controllers/categoryController/getCategorycontroller")

const getCategoryHandler = async (req, res) => {
    try {
        const response = await getCategoryController()
        res.status(200).json(response)
    } catch (error) {
        console.error("Error en el get categopry handler: " + error.message);
        throw new Error("Error en el get category handler: " + error.message);
    }
}

module.exports = getCategoryHandler;