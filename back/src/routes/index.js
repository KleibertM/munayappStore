const { Router } = require('express');
const iceRouter = require('./iceRouter');

const router = Router();

router.use('/ice', iceRouter);
// router.use('/sale', saleRouter);
// router.use('/invest', investingRouter);
// router.use('/user', userRouter);
// router.use('/category', categoryRouter);
// router.use('/ingredient', ingredientRouter);

module.exports = router;