const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        user_phone: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        user_roll: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {timestamps: false})
}