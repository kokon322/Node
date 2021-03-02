const { userValidators: { createUserValidator } } = require('../validators');

module.exports = {
    isUserValid: async (req, res, next) => {
        try {
            const { error } = await createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
