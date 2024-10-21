const createIceController = require("../../controllers/iceControllrs/createIceController")

const createIceHandler = async (req, res) => {
    try {
        const {name_ice, price_ice, about_ice, img_ice, category_ice,type_ice} = req.body
        const response = await createIceController(name_ice, price_ice, about_ice, img_ice, category_ice,type_ice)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json("Error en el create Controllers: " + error.message)
    }
}

module.exports = createIceHandler