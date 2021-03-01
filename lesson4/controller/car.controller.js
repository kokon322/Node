const carService = require('../service/car.service');
const carSuccessCode = require('../constant/carSuccessCodes.enum');

module.exports = {
    createCar: async (req, res) => {
        try {
            await carService.createCarToDb(req.body);

            res.json(carSuccessCode.carIsCreated);
        } catch (err) {
            res.json(err.message);
        }
    },

    getCar: async (req, res) => {
        try {
            const Cars = await carService.getCarFromDb(req.query);

            res.json(Cars);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateCar: async (req, res) => {
        try {
            await carService.updateCar(req.query, req.body);

            res.json(carSuccessCode.carIsUpdated);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            await carService.deleteCarFromDb(req.query);

            res.json(carSuccessCode.carIsDeleted);
        } catch (err) {
            res.json(err.message);
        }
    }
};
