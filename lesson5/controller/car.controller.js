const carService = require('../service/car.service');

module.exports = {
    createNewCar: async (req, res) => {
        try {
            await carService.createNewCar(req.body);
            res.json('car created');
        } catch (err) {
            res.json(err.message);
        }
    },

    readCar: async (req, res) => {
        try {
            const cars = await carService.readCar(req.query);
            res.json(cars);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateOneCar: async (req, res) => {
        try {
            await carService.updateOneCar(req.query, req.body);
            res.json('car updated');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneCar: async (req, res) => {
        try {
            await carService.deleteOneCar(req.query);
            res.json('car deleted');
        } catch (err) {
            res.json(err.message);
        }
    }
};
