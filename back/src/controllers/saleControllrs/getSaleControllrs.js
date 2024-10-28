const {Sale} = require('../../db');
const getSaleDataController = async () => {
    try {
        const data = await Sale.findAll()
        if (!data || !data.length) {
            console.log(error, "No hay datos de allOrder disponibles");
            throw new Error('No hay datos de llOrder disponibles');
        }
        return data;
    } catch (error) {
        console.error("Error al obtener data Sale", error.message);
        return { message: "Error al obtener data Sale" };
    }
}

module.exports = getSaleDataController;