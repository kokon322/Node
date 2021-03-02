const router = require('express').Router();

const {
    carController: {
        createNewCar, readCar, updateOneCar, deleteOneCar
    }
} = require('../controller');

const { carMiddleware: { isCarValid, isQueryValid } } = require('../middleware');

router
    .post('/', isCarValid, createNewCar)
    .get('/', isQueryValid, readCar)
    .put('/', isCarValid, updateOneCar)
    .delete('/', isQueryValid, deleteOneCar);

module.exports = router;
