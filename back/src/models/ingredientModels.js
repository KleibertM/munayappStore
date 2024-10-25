const {DataTypes} = require('sequelize');
const unMedid = ['kg', 'litro', 'unidad']
module.exports = (sequelize) => {
    sequelize.define('ingredients', {
        ingred_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        ingred_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingred_quantity: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ingred_measurement: {
            type: DataTypes.ENUM(...unMedid),
            allowNull: false
        },
        id_ice_fk: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {timestamps: false})
}