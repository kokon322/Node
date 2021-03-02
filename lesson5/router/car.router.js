const router = require('express').Router();
const {
    createNewCar, readCar, updateOneCar, deleteOneCar
} = require('../controller/car.controller');

router
    .post('/', createNewCar)
    .get('/', readCar)
    .put('/', updateOneCar)
    .delete('/', deleteOneCar);

module.exports = router;
