const {Ice, Category} = require('../../db');
const getIceDataController = async () => {
    try {
        const allIce = await Ice.findAll({
            include: [{model: Category,
                attributes: ['category_name']
            }]
        })
        if (!allIce || !allIce.length) {
            console.log(error, "No hay datos de ice cream disponibles");
            throw new Error('No hay datos de ice cream disponibles');
        }
        return allIce;
    } catch (error) {
        throw new Error({ message: "No hay data en DB" });
    }
}

module.exports = getIceDataController