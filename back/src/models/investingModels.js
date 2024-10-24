const {DataTypes} = require('sequelize');
const unMedid = ['kg', 'litro', 'unidad']
module.exports = (sequelize) => {
    sequelize.define('Investing', {
        investing_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        ingredient_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        investing_type: {
            type: DataTypes.ENUM(...unMedid),
            allowNull: false
        },  
        investing_cant: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        investing_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        investing_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        investing_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {timestamps: false})
}