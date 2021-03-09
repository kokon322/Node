const router = require('express').Router();

const {
    carController: {
        createCar, readCar, updateCar, deleteCar
    }
} = require('../controller');

const { carMiddleware: { isQueryValid, isCarValid } } = require('../middleware');

router
    .post('/', isQueryValid, isCarValid, createCar)
    .get('/', isQueryValid, readCar)
    .put('/', isQueryValid, isCarValid, updateCar)
    .delete('/', isQueryValid, deleteCar);

module.exports = router;
