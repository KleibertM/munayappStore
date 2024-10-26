const {Router} = require('express');
const getInvestHandler = require('../handlers/investingHandler/getInvestingHandler');
const createInvestHandler = require('../handlers/investingHandler/createInvestingHandler');
const updateInvestHandler = require('../handlers/investingHandler/updateInvestingHandler');
const getDetailInvestHandler = require('../handlers/investingHandler/getInvestingDatailHandler');

const investingRouter = Router();

investingRouter.get('/', getInvestHandler)
investingRouter.get('/detail/:id', getDetailInvestHandler)
investingRouter.post('/', createInvestHandler ) 
investingRouter.patch('/update/:id', updateInvestHandler)

module.exports = investingRouter;