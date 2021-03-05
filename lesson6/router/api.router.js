const router = require('express').Router();

const userRouter = require('./user.router');
const carRouter = require('./car.router');
const authRoute = require('./auth.router');

router.use('/users', userRouter);
router.use('/cars', carRouter);
router.use('/auth', authRoute);

module.exports = router;
