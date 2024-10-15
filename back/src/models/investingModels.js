const {DataTypes} = require('sequelize');

module.export = (sequelize) => {
    sequelize.define('investing', {
        investing_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ingredients',
                key: 'ingredient_id'
            }
        },
        investing_uni: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        investing_cant: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        investing_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        investing_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    })
}