const router = require('express').Router();

const userRouter = require('./user.router');
const autorizationRoutet = require('./autorization.router');

router.use('/users', userRouter);
router.use('/autorization', autorizationRoutet);


module.exports = router;