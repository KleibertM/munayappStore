const createCategoryController = require("../../controllers/categoryController/createCategoryController");

const createCategoryHandler = async (req,res) => {
    try {
        const {category_name} = req.body
        const response = await createCategoryController(category_name)
        res.status(201).json(response)
    } catch (error) {
        console.error("Error en el create category handler: " + error.message);
        throw new Error("Error en el create category handler: " + error.message);
    }
}

module.exports = createCategoryHandler;