const { Sale } = require('../../db');
const createSaleController = async (newOrder, totalGeneral) => {
    console.log('datos llegandoa sale', newOrder);

    try {
        const dataSale = {
            order_id: newOrder.order_id,
            sale_date: new Date(),
            sale_total: totalGeneral
        };
        console.log('data para crea Sale', dataSale);
        if (!dataSale || dataSale.length === 0) {
            console.log("falta datos para crear una Sale: " + error.message + dataSale);
            throw new Error("falta datos para crear una Sale: " + error.message);

        }
        const newSale = await Sale.create(dataSale)
        return { message: 'Nueva Sale creada', data: newSale }
    } catch (error) {
        console.error("Error en el create sale Controllers: " + error.message);
        throw new Error("Error en el create sale Controllers: " + error.message);
    }
}
module.exports = createSaleController