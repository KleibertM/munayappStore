const { Router } = require('express');
const iceRouter = require('./iceRouter');
const categoryRouter = require('./categoryRouter');
const investingRouter = require('./investingRouter');
const orderRouter = require('./orderRouter');
const saleRouter = require('./saleRouter');
const productionRouter = require('./productionRouter');

const router = Router();

router.use('/ice', iceRouter);
router.use('/order', orderRouter)
router.use('/sale', saleRouter);
router.use('/invest', investingRouter);
router.use('/production', productionRouter);
// router.use('/user', userRouter);
router.use('/category', categoryRouter);
// router.use('/ingredient', ingredientRouter);

module.exports = router;