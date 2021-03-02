const { userValidators: { createUserValidator, searchQuery } } = require('../validators');
const { User } = require('../dataBase/model');
const { userErrorMessages: { NO_REGISTRATION, USER_IN_DB } } = require('../constant');

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
    },

    isQueryValid: async (req, res, next) => {
        try {
            const { error } = await searchQuery.validate(req.query);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },

    isUserRegister: async (req, res, next) => {
        try {
            const { email } = req.body;
            const allUsers = await User.find({ email });

            if (allUsers.length <= 0) {
                throw new Error(NO_REGISTRATION);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },

    isUserInDb: async (req, res, next) => {
        try {
            const { email } = req.body;
            const allUsers = await User.find({ email });

            if (allUsers.length >= 0) {
                throw new Error(USER_IN_DB);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
