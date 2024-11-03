const {Router} = require('express');
const createProductionHandler = require('../handlers/productionHandler/createProductionHandler');

const productionRouter = Router();


productionRouter.post('/', createProductionHandler);


module.exports = productionRouter;