const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Category', {
        category_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        category_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        id_ice: {
            type: DataTypes.UUID,
        }
    }, {timestamps: false})
}