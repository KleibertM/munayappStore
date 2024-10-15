const {DataTypes,} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('ice', {
        id_ice: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name_ice: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price_ice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        about_ice: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [0, 500] // Validar la longitud para un máximo de 500 caracteres
            }
        },
        img_ice: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        type_ice: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        status_ice: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {timestamps: false})
}