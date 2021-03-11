const { carService } = require('../services');
const { SuccessMessage } = require('../constants');

const createNewCar = async (req, res, next) => {
    try {
        await carService.createNewCar(req.body);
        res.json(SuccessMessage.CAR_CREATED);
    } catch (e) {
        next(e);
    }
};

const readCar = async (req, res, next) => {
    try {
        const car = await carService.readCar(req.query);
        res.json(car);
    } catch (e) {
        next(e);
    }
};

const updateCar = async (req, res, next) => {
    try {
        await carService.updateCar(req.query, req.body);
        res.json(SuccessMessage.CAR_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteCat = async (req, res, next) => {
    try {
        await carService.deleteCar(req.query);
        res.json(SuccessMessage.CAR_DELETED);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    createNewCar,
    readCar,
    updateCar,
    deleteCat
};
