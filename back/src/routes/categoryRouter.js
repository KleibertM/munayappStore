const {Router} = require('express');
const createCategoryHandler = require('../handlers/categoryHandler/createCategoryHandler');
const getCategoryHandler = require('../handlers/categoryHandler/getcategoryHandler');

const categoryRouter = Router();

categoryRouter.get('/', getCategoryHandler);
categoryRouter.post('/', createCategoryHandler)

module.exports = categoryRouter;