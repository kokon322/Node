const {
    carService: {
        createCar, readCar, updateCar, deleteCar
    }
} = require('../service');

const { SUCCESS_MESSAGES: { CAR_CREATED, CAR_UPDATED, CAR_DELETED } } = require('../constant');

module.exports = {
    createCar: async (req, res) => {
        try {
            await createCar(req.body);

            res.json(CAR_CREATED);
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

            res.json(CAR_UPDATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            await deleteCar(req.query);

            res.json(CAR_DELETED);
        } catch (err) {
            res.json(err.message);
        }
    }
};
