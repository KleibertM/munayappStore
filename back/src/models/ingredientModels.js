const {DataTypes} = require('sequelize');
const unMedid = ['kg', 'litro', 'unidad']
module.exports = (sequelize) => {
    sequelize.define('Ingredients', {
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
        ingredient_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {timestamps: false})
}