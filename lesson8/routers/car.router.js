const router = require('express').Router();

const { carController } = require('../controllers');

router
    .post('/', carController.createNewCar)
    .get('/', carController.readCar)
    .put('/', carController.updateCar)
    .delete('/', carController.deleteCat);

module.exports = router;
