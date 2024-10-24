const createInvestController = async (dataInves) => {
    try {
        const investData = dataInves?.map((invest) => {
            return {
                ingredient_name: invest.ingredient_name,
                investing_type: invest.investing_type,
                investing_cant: invest.investing_cant,
                investing_price: investment.investing_price,
                investing_date: investment.investing_date,
                investing_total: invest.investing_total,
            }
        })
        const createInvest = await Investing.bulkCreate(investData, {returning: true})

        return createInvest; 
    } catch (error) {
        console.log("Error al crear una venta en Controllers: " + error.message + cart);
        throw new Error("Error al crear una venta en Controllers: " + error.message );
    }
}

module.exports = createInvestController;