const { Router } = require('express');

const router = Router();

router.use('/book', iceRouter);
router.use('/book', saleRouter);
router.use('/book', investingRouter);
router.use('/book', userRouter);
router.use('/book', categoryRouter);
router.use('/book', ingredientRouter);

module.exports = router;