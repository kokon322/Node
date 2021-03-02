const { carValidators: { createCarValidator } } = require('../validators');

module.exports = {
    isCarValid: async (req, res, next) => {
        try {
            const { error } = await createCarValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
