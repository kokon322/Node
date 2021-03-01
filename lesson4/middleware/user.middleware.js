const User = require('../dataBase/models/User');
const userErrorMessage = require('../constant/userErrorMessage.enum');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { name, age, email } = req.body;

            if (name.length < 1 || name.length > 256 || Number.isInteger(name) || age.length < 3
                || email.length < 10 || email.length > 256 || !email.includes('@')) {
                throw new Error(userErrorMessage.USER_IS_NOT_VALID);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    isUserWithThisEmail: async (req, res, next) => {
        try {
            const allUsers = await User.find();

            const { email } = req.body;

            const result = allUsers.some(user => user.email === email);

            if (result) {
                throw new Error(userErrorMessage.USER_WITH_THIS_EMAIL);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    haveThisEmail: async (req, res, next) => {
        try {
            const allUsers = await User.find();

            const { email } = req.body;

            const result = allUsers.some(user => user.email === email);

            if (!result) {
                throw new Error(userErrorMessage.DONT_HAVE_USER_WITH_EMAIL);
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
