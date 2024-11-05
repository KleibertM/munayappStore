const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Production', {
        production_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        id_ice: {
            type: DataTypes.UUID,
            allowNull: false
        },
        ingredient_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        ingredient_cant: {
            type: DataTypes.DECIMALDECIMAL(10, 2),
            allowNull: false
        },
        production_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        production_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {timestamps: false})
}