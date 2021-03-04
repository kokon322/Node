const {
    carService: {
        createCar, readCar, updateCar, deleteCar
    }
} = require('../service');

module.exports = {
    createCar: async (req, res) => {
        try {
            await createCar(req.body);

            res.json('Car created');
        } catch (err) {
            res.json(err.message);
        }
    },

    readCar: async (req, res) => {
        try {
            const car = await readCar(req.query);

            res.json(car);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateCar: async (req, res) => {
        try {
            await updateCar(req.query, req.body);

            res.json('Car updated');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            await deleteCar(req.query);

            res.json('Car deleted');
        } catch (err) {
            res.json(err.message);
        }
    }
};
