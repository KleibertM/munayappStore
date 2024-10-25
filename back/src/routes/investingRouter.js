const {Router} = require('express');
const getInvestHandler = require('../handlers/investingHandler/getInvestingHandler');
const createInvestHandler = require('../handlers/investingHandler/createInvestingHandler');

const investingRouter = Router();

investingRouter.get('/', getInvestHandler )
investingRouter.post('/', createInvestHandler ) 

module.exports = investingRouter;