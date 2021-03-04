const { carValidator: { carValidator, carQueryValidator } } = require('../validator');

module.exports = {
    isCarValid: async (req, res, next) => {
        try {
            const { error } = await carValidator.validate(req.body);

            if (error) {
                throw new Error('Car is not Valid');
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
                throw new Error('Query is not Valid');
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
