const { carValidator, queryValidatorForCar } = require('../validators');
const { ErrorMessage: { CAR_QUERY_IS_NOT_VALID, CAR_IS_NOT_VALID } } = require('../constants');
const { ErrorHandler } = require('../errors');

module.exports = {
    isCarValid: async (req, res, next) => {
        try {
            const { error } = await carValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(CAR_IS_NOT_VALID, 418);
            }

            next();
        } catch (err) {
            next(err);
        }
    },

    isQueryValid: async (req, res, next) => {
        try {
            const { error } = await queryValidatorForCar.validate(req.query);

            if (error) {
                throw new ErrorHandler(CAR_QUERY_IS_NOT_VALID, 401);
            }

            next();
        } catch (err) {
            next(err);
        }
    }
};
