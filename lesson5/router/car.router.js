const router = require('express').Router();

const {
    carController: {
        createNewCar, readCar, updateOneCar, deleteOneCar
    }
} = require('../controller');

router
    .post('/', createNewCar)
    .get('/', readCar)
    .put('/', updateOneCar)
    .delete('/', deleteOneCar);

module.exports = router;
