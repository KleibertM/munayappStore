const {Router} = require('express');
const getSaleDataHandler = require('../handlers/saleHandler/getSaleHandler');

const saleRouter = Router()

saleRouter.get('/', getSaleDataHandler)

module.exports = saleRouter;