const {DataTypes} = require('sequelize');

module.exports = (sequelze) => {
    sequelze.define('Sale', {
        sale_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        order_id: {
            type: DataTypes.UUID,
            allowNull: false,
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