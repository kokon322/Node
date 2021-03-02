const {
    carService: {
        createNewCar, readCar, updateOneCar, deleteOneCar
    }
} = require('../service');

const { carSuccessMessage: { CAR_CREATED, CAR_UPDATED, CAR_DELETED } } = require('../constant');

module.exports = {
    createNewCar: async (req, res) => {
        try {
            await createNewCar(req.body);

            res.json(CAR_CREATED);
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

            res.json(CAR_UPDATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneCar: async (req, res) => {
        try {
            await deleteOneCar(req.query);

            res.json(CAR_DELETED);
        } catch (err) {
            res.json(err.message);
        }
    }
};
