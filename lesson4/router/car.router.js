const router = require('express').Router();

const carController = require('../controller/car.controller');

router.get('/', carController.getCar)
    .post('/', carController.createCar)
    .put('/', carController.updateCar)
    .delete('/', carController.deleteCar);

module.exports = router;
