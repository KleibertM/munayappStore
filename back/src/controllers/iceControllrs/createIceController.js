const {Ice,Category} = require('../../db');

const createIceController = async (
    name_ice,
    price_ice,
    about_ice,
    img_ice,
    type_ice,
    category_id
) => {
    try {
        // Asegúrate de que category_ice es un número entero
        if (!category_id || typeof category_id !== 'number') {
            throw new Error('Debe seleccionar una categoría válida.');
        }

        // Buscar o crear la categoría por su ID
        const [category] = await Category.findOrCreate({
            where: {
                category_id: category_id // Asegúrate de que es un entero, no un booleano.
            }
        });

        // Crear el nuevo ice
        const newIce = await Ice.create({
            name_ice,
            price_ice,
            about_ice,
            img_ice,
            type_ice,
            category_id: category.category_id // Usar el ID de la categoría obtenida.
        });

        return newIce;
    } catch (error) {
        console.error("Error en el create ice Controllers: " + error.message);
        throw new Error("Error en el create ice Controllers: " + error.message);
    }
};

module.exports = createIceController

