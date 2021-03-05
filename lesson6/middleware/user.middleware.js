const { User } = require('../model');
const { userValidator: { userValidator, userQueryValidator } } = require('../validator');
const { ERROR_MESSAGES: { USER_IS_NOT_VALID, USER_QUERY_IS_NOT_VALID, USER_IS_NOT_PRESENT_IN_DB } } = require('../constant');

module.exports = {
    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidator.validate(req.body);

            if (error) {
                throw new Error(USER_IS_NOT_VALID);
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
                throw new Error(USER_QUERY_IS_NOT_VALID);
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
                throw new Error(USER_IS_NOT_PRESENT_IN_DB);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
