const {DataTypes,} = require('sequelize')

const statusEnum = ['pending', 'complete'];

module.exports = (sequelize) => {
    sequelize.define('order', {
        order_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        ice_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'ice',
                key: 'id_ice'
            }
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        order_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        ice_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        order_status: {
            type: DataTypes.ENUM(...statusEnum),
            allowNull: false,
        },
        order_payment: {
            type: DataTypes.ENUM(...statusEnum),
            allowNull: false,
        },
        order_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {timestamps: false})
}