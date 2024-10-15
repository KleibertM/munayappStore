const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('category', {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})
}