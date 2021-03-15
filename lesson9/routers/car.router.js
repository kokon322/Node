const router = require('express').Router();

const { carController } = require('../controllers');
const { carMiddleware, fileMiddleware } = require('../middlewares');

router
    .post('/', carMiddleware.isCarValid, fileMiddleware.checkFile, carController.createNewCar);

router.use('/', carMiddleware.isQueryValid)
    .get('/', carController.readCar)
    .put('/', carMiddleware.isCarValid, carController.updateCar)
    .delete('/', carController.deleteCat);

module.exports = router;
