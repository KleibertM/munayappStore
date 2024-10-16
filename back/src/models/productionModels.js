const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('production', {
        production_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        ice_id: {
            type: DataTypes.UUID,
            references: {
                model: 'ice',
                key: 'id_ice'
            }
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