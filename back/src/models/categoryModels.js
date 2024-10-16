const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('category', {
        category_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})
}