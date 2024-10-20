const createIceController = async (
    name_ice,
    price_ice,
    about_ice,
    image_ice,
    ice_type,
    category_ice
) => {
    try {
        if(!category_ice || category_ice.length === 0) {
            throw new Error('Debe seleccionar una categoría.');
        }
        const category = category_ice.findAll({
            where: {
                name: category_ice
            }
        })
        const newIce = await iceModels.create({
            name_ice,
            price_ice,
            about_ice,
            image_ice,
            ice_type,
            category_ice
        })
        await newIce.addCategories(category);
        return newIce;
    } catch (error) {
        console.error("Error en el create ice Controllers: " + error.message);
        throw new Error("Error en el create ice Controllers: " + error.message);
        
    }
}

module.exports = createIceController;


