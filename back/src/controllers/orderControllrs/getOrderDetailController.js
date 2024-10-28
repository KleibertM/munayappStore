const {Ice} = require('../../db');
const getDetailIceController = async (id_ice)=> {
    const detailIce = await Ice.findByPk(id_ice)
    if (!detailIce) {
        throw new Error('El helado no existe');
    }

    const data = await detailIce.toJSON();
    const dataIce = {
        id_ice: data.id_ice,
        name_ice: data.name_ice,
        price_ice: data.price_ice,
        about_ice: data.about_ice,
        category_id: data.category_id.category_name,
    }
    return dataIce;
}
module.exports = getDetailIceController;