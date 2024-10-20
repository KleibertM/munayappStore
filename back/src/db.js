require('dotenv').config();
const {Sequelize} = require('sequelize')
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL} = process.env
const { Pool } = require('pg');

//MODELOS

const iceModels = require('./models/iceModels')
const userModels = require('./models/userModels')
const saleModels = require('./models/saleModels')
const ordersModels = require('./models/ordersModels')
const investingModels = require('./models/investingModels')
const productionModels  = require('./models/productionModels')
const categoryModels = require('./models/categoryModels')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

iceModels(sequelize)

userModels(sequelize)

saleModels(sequelize)

ordersModels(sequelize)

investingModels(sequelize)

productionModels(sequelize)

categoryModels(sequelize)

//RELACIONES

const {ice,sale, orders, user, investing, production, category } =sequelize.models

ice.hasMany(categoryModels, {foreignKey: 'category_ice'})
ice.hasMany(ordersModels, {foreignKey: 'id_ice'})
ice.hasMany(productionModels, {foreignKey: 'id_ice'})

category.hasMany(iceModels, {foreignKey: 'id_ice'})

orders.belongsTo(userModels, {foreignKey: 'user_id'})
orders.hasOne(saleModels, {foreignKey: 'order_id'})
orders.belongsTo(iceModels, {foreignKey: 'id_ice'});

sale.belongsTo(ordersModels, {foreignKey: 'order_id'})  

user.hasMany(ordersModels, {foreignKey: 'user_id'})

investing.hasMany(productionModels, {foreignKey: 'production_id'})

production.belongsTo(iceModels, {foreignKey: 'id_ice'})
production.hasMany(investingModels, {foreignKey: 'investing_id'}) 


module.exports = {
    sequelize,
    ...sequelize.models,
    conn: sequelize
}