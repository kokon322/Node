const { carValidator: { carValidator, carQueryValidator } } = require('../validator');
const { ERROR_MESSAGES: { CAR_IS_NOT_VALID, CAR_QUERY_IS_NOT_VALID } } = require('../constant');

module.exports = {
    isCarValid: async (req, res, next) => {
        try {
            const { error } = await carValidator.validate(req.body);

            if (error) {
                throw new Error(CAR_IS_NOT_VALID);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },

    isQueryValid: async (req, res, next) => {
        try {
            const { error } = await carQueryValidator.validate(req.query);

            if (error) {
                throw new Error(CAR_QUERY_IS_NOT_VALID);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
