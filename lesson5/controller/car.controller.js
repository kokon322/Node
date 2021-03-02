const {
    carService: {
        createNewCar, readCar, updateOneCar, deleteOneCar
    }
} = require('../service');

module.exports = {
    createNewCar: async (req, res) => {
        try {
            await createNewCar(req.body);
            res.json('car created');
        } catch (err) {
            res.json(err.message);
        }
    },

    readCar: async (req, res) => {
        try {
            const cars = await readCar(req.query);
            res.json(cars);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateOneCar: async (req, res) => {
        try {
            await updateOneCar(req.query, req.body);
            res.json('car updated');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneCar: async (req, res) => {
        try {
            const result = await deleteOneCar(req.query);
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    }
};
