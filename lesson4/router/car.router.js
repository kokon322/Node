const router = require('express').Router();
const carMiddleware = require('../middleware/car.middleware');

const carController = require('../controller/car.controller');

router.get('/', carController.getCar)
    .post('/', carMiddleware.isCarValid, carController.createCar)
    .put('/', carMiddleware.isCarInDB, carController.updateCar)
    .delete('/', carMiddleware.isCarInDB, carController.deleteCar);

module.exports = router;
