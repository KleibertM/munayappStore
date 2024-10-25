const {Investing} = require('../../db');
const getInvestController = async () => {
    try {
        const data = await Investing.findAll();
        // Sumar los totales de las inversiones
        const total = data.reduce((accum, invest) => {
            // Asegúrate de convertir `invest.investing_total` a número para sumar correctamente
            return accum + parseFloat(invest.investing_total);
        }, 0);
        const investingDate = data.length > 0 ? data[0].investing_date : null;
        return {// Retorna los datos de las inversiones
            Total: total,
            Fecha: investingDate// Retorna el total calculado
        };
    } catch (error) {
        console.log("Error al obtener una Invest en Controllers: " + error.message + cart);
        throw new Error("Error al obtener una Invest en Controllers: " + error.message );
    }
}

module.exports = getInvestController;