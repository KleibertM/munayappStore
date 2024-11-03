const { Production } = require('../../db');

const createProductionController = async (dataProduction) => {
    console.log('data en controller created', dataProduction);
    try {
        const orderArray = Array.isArray(dataProduction) ? dataProduction : [dataProduction];
        const productionData = orderArray.map((production) => {
            const ice = production.id_ice_fk;
            const investing = production.inversion_id_fk; // Agregar este campo en la tabla de inversiones
            const quantity = production.production_quantity
            return {
                id_ice_fk: ice,
                investing_id_fk: investing,
                production_quantity: quantity,
                production_date: new Date(),
            }
        })
        // Crear el nuevo ice
        const newProduction = await Production.bulkCreate(productionData, { returning: true });
        return {
            Production: newProduction
        };
    } catch (error) {
        console.error("Error en el create production Controllers: " + error.message);
        throw new Error("Error en el create production Controllers: " + error.message);
    }
};

module.exports = createProductionController

