const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Production', {
        production_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        id_ice_fk: {
            type: DataTypes.UUID,
            allowNull: false
        },
        investing_id_fk: {
            type: DataTypes.UUID,
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