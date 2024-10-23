const {DataTypes,} = require('sequelize')

const categoryEnum = ['TRADICIONAL', 'ESPECIAL', 'BOX', 'GLUTEN-FREE']

module.exports = (sequelize) => {
    sequelize.define('Ice', {
        id_ice: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name_ice: {
            type: DataTypes.STRING(50),
            unique: true,
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
        },
        category_id: {
            type: DataTypes.INTEGER, // Agregar el campo category con ENUM
            allowNull: false
        }
    }, {timestamps: false})
}