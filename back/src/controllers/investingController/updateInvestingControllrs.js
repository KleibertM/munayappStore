const {Investing} = require('../../db');
const updateInvestController = async (id, newDataInvest) => {
    
    try {
        const invest = await Investing.findByPk(id);
        if (!invest) {
            console.error(`El invest con investing_id ${id} no existe en la base de datos.`);
            throw new Error('El inversión no existe');
        }
        await Investing.update(newDataInvest[0], {
            where: { investing_id: id } // Ajusta el campo si tienes un nombre de clave primaria diferente
        });
        const updatedInvest = await Investing.findByPk(id);
        return { message: "Datos actualizados exitosamente", data: updatedInvest };
    } catch (error) {
        console.error("Error al actualizar invest: controller", error.message);
        return { message: "Error al actualizar invest" };
    }
}
module.exports = updateInvestController;