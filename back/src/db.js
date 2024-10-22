require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

// const sequelize = new Sequelize(DATABASE_URL, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: true,
//   },
// });

// Cargar modelos
const iceModels = require('./models/iceModels');
const userModels = require('./models/userModels');
const saleModels = require('./models/saleModels');
const ordersModels = require('./models/ordersModels');
const investingModels = require('./models/investingModels');
const productionModels = require('./models/productionModels');
const categoryModels = require('./models/categoryModels');

// Definir modelos
iceModels(sequelize);
userModels(sequelize);
saleModels(sequelize);
ordersModels(sequelize);
investingModels(sequelize);
productionModels(sequelize);
categoryModels(sequelize);

// Relaciones entre modelos
const { Ice, Sale, Order, User, Investing, Production, Category } = sequelize.models;

Ice.belongsTo(Category, { foreignKey: 'category_id' });
Ice.hasMany(Order, { foreignKey: 'id_ice' });
Ice.hasMany(Production, { foreignKey: 'id_ice' });
Category.hasMany(Ice, { foreignKey: 'category_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.hasOne(Sale, { foreignKey: 'order_id' });
Order.belongsTo(Ice, { foreignKey: 'id_ice' });
Sale.belongsTo(Order, { foreignKey: 'order_id' });
User.hasMany(Order, { foreignKey: 'user_id' });
Investing.hasMany(Production, { foreignKey: 'investing_id' });
Production.belongsTo(Ice, { foreignKey: 'id_ice' });
Production.hasMany(Investing, { foreignKey: 'investing_id' });

// Sincronizar modelos
const syncModels = async () => {
  try {
    await sequelize.sync({ force: false }); // force: true elimina y recrea las tablas; force: false solo crea tablas si no existen
    console.log('Tablas sincronizadas correctamente');
  } catch (error) {
    console.error('Error al sincronizar tablas:', error);
  }
};

syncModels();

module.exports = {
  sequelize,
  ...sequelize.models,
  conn: sequelize,
};

