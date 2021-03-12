const router = require('express').Router();

const { carController } = require('../controllers');
const { fileMiddleware } = require('../middlewares');

router
    .post('/', fileMiddleware.checkFile, carController.createNewCar)
    .get('/', carController.readCar)
    .put('/', carController.updateCar)
    .delete('/', carController.deleteCat);

module.exports = router;
