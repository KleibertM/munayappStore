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
const ingredientsModels = require('./models/ingredientModels');

// Definir modelos
iceModels(sequelize);
userModels(sequelize);
saleModels(sequelize);
ordersModels(sequelize);
investingModels(sequelize);
productionModels(sequelize);
categoryModels(sequelize);
ingredientsModels(sequelize);

// Relaciones entre modelos
const { Ice, Sale, Order, User, Investing, Production, Category, Ingredients } = sequelize.models;

Ice.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Ice, { foreignKey: 'category_id' });
Ice.hasMany(Order, { foreignKey: 'id_ice' });
Ice.hasMany(Production, { foreignKey: 'id_ice' });
Order.belongsTo(User, { foreignKey: 'user_id' });
Order.hasOne(Sale, { foreignKey: 'order_id' });
Order.belongsTo(Ice, { foreignKey: 'id_ice' });
Sale.belongsTo(Order, { foreignKey: 'order_id' });
User.hasMany(Order, { foreignKey: 'user_id' });
Investing.hasMany(Production, { foreignKey: 'investing_id' });
Production.belongsTo(Ice, { foreignKey: 'id_ice' });
Production.hasMany(Investing, { foreignKey: 'investing_id' });
Ingredients.hasMany(Investing, { foreignKey: 'ingred_id' });
// Sincronizar modelos
const syncModels = async () => {
  try {
    await sequelize.sync({ force: false }); // force: true elimina y recrea las tablas; force: false solo crea tablas si no existen
    const initialCategories = [
      { category_name: 'Tradicional' },
      { category_name: 'Especial' },
      { category_name: 'Box' },
      { category_name: 'Big-Box' }
  ];
  // Insertar las categorías en la base de datos
  for (const category of initialCategories) {
    await Category.findOrCreate({
        where: { category_name: category.category_name },
        defaults: category
    });
}
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

