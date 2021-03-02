const router = require('express').Router();

const {
    carController: {
        createNewCar, readCar, updateOneCar, deleteOneCar
    }
} = require('../controller');

const { carMiddleware: { isCarValid } } = require('../middleware');

router
    .post('/', isCarValid, createNewCar)
    .get('/', readCar)
    .put('/', updateOneCar)
    .delete('/', deleteOneCar);

module.exports = router;
