const router = require('express').Router();

const userRouter = require('./users.router');
const carRouter = require('./cars.router');

router.use('/users', userRouter);
router.use('/cars', carRouter);

module.exports = router;
