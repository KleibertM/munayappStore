const {Investing} = require('../../db');

const getDetailInvestController = async (investing_id) => {
    try {
        const detailInvest = await Investing.findByPk(investing_id)
        if (!detailInvest) {
            throw new Error('El inversión no existe');
        }

        const data = detailInvest.toJSON();
        return data
        
    } catch (error) {
        console.log("Error al obtener detail Invest en Controllers: " + error.message);
        throw new Error("Error al obtener detail Invest en Controllers: " + error.message );
    }
}

module.exports = getDetailInvestController;