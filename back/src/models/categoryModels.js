const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Category', {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    }, {timestamps: false})
}