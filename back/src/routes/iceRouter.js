const {Router} = require('express');
const createIceHandler = require('../handlers/iceHandler/createIceHandler');
const getIceDataHandler = require('../handlers/iceHandler/getIceHandler');
const deleteIceHandler = require('../handlers/iceHandler/deleteIceHandler');
const updateIceHandler = require('../handlers/iceHandler/updateIceHandler');

const iceRouter = Router()

iceRouter.get('/', getIceDataHandler)
iceRouter.post('/', createIceHandler)
iceRouter.delete('/', deleteIceHandler)
iceRouter.put('/', updateIceHandler)

module.exports = iceRouter