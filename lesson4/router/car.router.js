const router = require('express').Router();

const carController = require('../controller/car.controller');

router.get('/', carController.getAllCar)
    .post('/', carController.createCar)
    .delete('/', carController.deleteCar);

module.exports = router;
