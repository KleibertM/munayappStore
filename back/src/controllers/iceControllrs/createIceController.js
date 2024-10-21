const {Ice,Category} = require('../../db');

const createIceController = async (
    name_ice,
    price_ice,
    about_ice,
    img_ice,
    type_ice,
    category_ice
) => {
    try {
        if(!category_name || category_name.length === 0) {
            throw new Error('Debe seleccionar una categoría.');
        }
        const category = Category.findOrCreate({
            where: {
                category_name: category_name
            }
        })
        const newIce = await Ice.create({
            name_ice,
            price_ice,
            about_ice,
            img_ice,
            type_ice,
            category_ice: category[0].category_id
        })
        return newIce;
    } catch (error) {
        console.error("Error en el create ice Controllers: " + error.message);
        throw new Error("Error en el create ice Controllers: " + error.message);
        
    }
}

module.exports = createIceController;


