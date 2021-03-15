const { carService } = require('../services');
const { SuccessMessage } = require('../constants');
const { fileHelper: { carFileHelper } } = require('../helpers');

const createNewCar = async (req, res, next) => {
    try {
        const { docs, photos, body } = req;

        const car = await carService.createNewCar(body);

        await carFileHelper(docs, photos, car);

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
        const { query, body } = req;

        await carService.updateCar(query, body);

        res.json(SuccessMessage.CAR_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteCat = async (req, res, next) => {
    try {
        const { query } = req;

        await carService.deleteCar(query);

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
