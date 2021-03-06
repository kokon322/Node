const { carValidator: { carValidator, carQueryValidator } } = require('../validator');
const { ERROR_MESSAGES: { CAR_IS_NOT_VALID, CAR_QUERY_IS_NOT_VALID } } = require('../constant');
const { ErrorHandler } = require('../error');

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
            const { error } = await carQueryValidator.validate(req.query);

            if (error) {
                throw new ErrorHandler(CAR_QUERY_IS_NOT_VALID, 401);
            }

            next();
        } catch (err) {
            next(err);
        }
    }
};
