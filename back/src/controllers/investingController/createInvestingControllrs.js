const { Investing } = require('../../db');
const createInvestController = async (dataInvest) => {
    try {
        if (!dataInvest || dataInvest.length === 0) {
            throw new Error("No hay datos de inversión para procesar.");
        }
        const investData = dataInvest?.map((invest) => {
            const name = invest.ingredient_name;
            const type = invest.investing_type
            const quantity = Number(invest.investing_cant);
            const price = parseFloat(invest.investing_price);
            const total = quantity * price;
            return {
                ingredient_name: name,
                investing_type: type,
                investing_cant: quantity,
                investing_price: price,
                investing_date: new Date(),
                investing_total: total,
            }
        })
        const createInvest = await Investing.bulkCreate(investData, { returning: true })
        // Calcular el gasto total
        const totalGeneral = createInvest.reduce((acc, invest) => {
            return acc + parseFloat(invest.investing_total);
        }, 0);
        // Retornar las inversiones creadas junto con el total general
        return {
            inversiones: createInvest,
            totalGeneral: totalGeneral
        };
    } catch (error) {
        console.log("Error al crear una Invest en Controllers: " + error.message);
        throw new Error("Error al crear una Invest en Controllers: " + error.message);
    }
}

module.exports = createInvestController;