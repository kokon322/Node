const { User } = require('../model');
const { userValidator: { userValidator, userQueryValidator } } = require('../validator');

module.exports = {
    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidator.validate(req.body);

            if (error) {
                throw new Error('User is not Valid');
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    isQueryValid: async (req, res, next) => {
        try {
            const { error } = await userQueryValidator.validate(req.query);

            if (error) {
                throw new Error('Query is not Valid');
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },

    isUserRegistration: async (req, res, next) => {
        try {
            const user = await User.find(req.query);
            if (Object.keys(req.query).length === 0 || user.length <= 0) {
                throw new Error('User is not present in DB');
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
