const {Router} = require('express');
const createIceHandler = require('../handlers/iceHandler/createIceHandler');
const getIceDataHandler = require('../handlers/iceHandler/getIceHandler');
const deleteIceHandler = require('../handlers/iceHandler/deleteIceHandler');
const updateIceHandler = require('../handlers/iceHandler/updateIceHandler');
const getDetailIceHandler = require('../handlers/iceHandler/getIceDetailHandler');

const iceRouter = Router()

iceRouter.get('/', getIceDataHandler)
iceRouter.get('/detail/:id', getDetailIceHandler)
iceRouter.post('/', createIceHandler)
iceRouter.delete('/:id', deleteIceHandler)
iceRouter.put('/:id', updateIceHandler)

module.exports = iceRouter