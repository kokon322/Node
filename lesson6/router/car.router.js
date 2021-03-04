const router = require('express').Router();

const {
    carController: {
        createCar, readCar, updateCar, deleteCar
    }
} = require('../controller');

router
    .post('/', createCar)
    .get('/', readCar)
    .put('/', updateCar)
    .delete('/', deleteCar);

module.exports = router;
