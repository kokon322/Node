const Car = require('../dataBase/models/Car');
const carErrorMessage = require('../constant/carErrorMessage.enum');

module.exports = {
    isCarValid: (req, res, next) => {
        try {
            const { producer, model, price } = req.body;

            if (Number.isNaN(price) || !Number.isInteger(price)
                || Number.isInteger(producer) || Number.isInteger(model)
                || producer.length < 2 || model.length < 2
                || producer.length > 256 || model.length > 256
            ) {
                throw new Error(carErrorMessage.CAR_IS_NOT_VALID);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    isCarInDB: async (req, res, next) => {
        try {
            const allCar = await Car.find(req.body);

            if (allCar.length <= 0) {
                throw new Error(carErrorMessage.CAR_NOT_IN_DB);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
