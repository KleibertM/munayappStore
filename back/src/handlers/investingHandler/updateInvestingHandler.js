const updateInvestController = require("../../controllers/investingController/updateInvestingControllrs");
const updateInvestHandler = async (req, res) => {
    const {id} = req.params;
    const {newDataInvest} = req.body;
    if (!newDataInvest || !Array.isArray(newDataInvest)) {
        return res.status(400).json({ message: "Datos no válinvesting_idos para actualizar" });
    }
    try {
        const response = await updateInvestController(id, newDataInvest)
        res.status(200).json(response);
    } catch (error) {
        console.error("Error al actualizar invest handler:", error.message);
        return { message: "Error al actualizar invest handler" };
    }
}

module.exports = updateInvestHandler;