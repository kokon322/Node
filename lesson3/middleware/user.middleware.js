const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

const readFile = promisify(fs.readFile);

const pathToDB = path.join(process.cwd(), 'lesson3', 'dataBase', 'users.txt');

module.exports = {

    checkIsIdValid: (req, res, next) => {
        try {
            const userId = +req.params.userId;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessages.ID_IS_NOT_VALID.en);
            }

            next();
        } catch (err) {
            res.status(errorCodes.BAD_REQUEST).json(err.message);
        }
    },

    isThisIdInDB: async (req, res, next) => {
        try {
            const userId = +req.params.userId;

            const data = await readFile(pathToDB);

            const allUsers = JSON.parse(data.toString());

            const result = allUsers.some((user) => +user.id === userId);

            if (!result) {
                throw new Error(errorMessages.NO_USER_WITH_THIS_ID.en);
            }

            next();
        } catch (err) {
            res.status(errorCodes.BAD_REQUEST).json(err.message);
        }
    },

    isUserValid: async (req, res, next) => {
        try {
            const { name, password, email } = req.body;

            const data = await readFile(pathToDB);

            const allUsers = JSON.parse(data.toString());

            const result = allUsers.some((user) => user.email === req.body.email);

            if (result || name.length < 1 || name.length > 20 || Number.isInteger(name) || password.length < 5
                || email.length < 10 || email.length > 50 || !email.includes('@')) {
                throw new Error(errorMessages.USER_IS_NOT_VALID.en);
            }

            next();
        } catch (err) {
            res.status(errorCodes.BAD_REQUEST).json(err.message);
        }
    }
};
