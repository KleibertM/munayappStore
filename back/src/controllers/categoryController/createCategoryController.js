const {Category} = require('../../db');

const createCategoryController = async (category_name) => {
    try {
        const newCategory = await Category.findOrCreate({
            where: {
                category_name: category_name
            }
        })

        return newCategory;
    } catch (error) {
        console.error("Error en el create categopry Controllers: " + error.message);
        throw new Error("Error en el create category Controllers: " + error.message);
    }
}

module.exports = createCategoryController;