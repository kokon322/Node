const router = require('express').Router();

const carRouter = require('./car.router');
const userRouter = require('./user.router');
const { routes: { cars, users } } = require('../constant');

router.use(cars, carRouter);
router.use(users, userRouter);

module.exports = router;
