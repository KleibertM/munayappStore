const {DataTypes} = require('sequelize');

module.exports = (sequelze) => {
    sequelze.define('sale', {
        sale_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ice_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ice',
                key: 'id_ice'
            }
        },
        sale_cant: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sale_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        sale_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {timestamps: false})
}