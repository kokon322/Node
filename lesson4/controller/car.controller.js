const carService = require('../service/car.service');

module.exports = {
    getAllCar: async (req, res) => {
        try {
            const allCars = await carService.getAllCarFromDb();
            res.json(allCars);
        } catch (err) {
            res.json(err.message);
        }
    },
    createCar: async (req, res) => {
        try {
            const result = await carService.createCarToDb();
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const result = await carService.deleteCarFromDb();
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    }
};
