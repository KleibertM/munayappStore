const {Category} = require('../../db');

const getCategoryController = () => {
    try {
        const data = Category.findAll();
        return data;
        
    } catch (error) {
        console.error("Error en el get categopry Controllers: " + error.message);
        throw new Error("Error en el get category Controllers: " + error.message);
    }
}

module.exports = getCategoryController;