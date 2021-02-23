const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

const pathToDB = path.join(process.cwd(), 'lesson3', 'dataBase', 'users.txt');

module.exports = {
    checkIsIdValid: async (req, res, next) => {
        try {
            const userId = +req.params.userId;
            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error('Not Valid id');
            }
            next();
        } catch (err) {
            res.status(400).json(err.message);
        }
    },
    isThisIdInDB: async (req, res, next) => {
        try {
            const userId = +req.params.userId;
            const data = await readFile(pathToDB);
            const allUsers = JSON.parse(data.toString());
            const result = allUsers.some(user => {
                return +user.id === userId;
            });
            if (!result) {
                throw new Error('We are do not found user with this ID');
            }
            next();
        } catch (err) {
            res.status(400).json(err.message);
        }
    },
    isUserValid: async (req, res, next) => {
        try {
            const {name, password, email} = req.body;
            const data = await readFile(pathToDB);
            const allUsers = JSON.parse(data.toString());
            const result = allUsers.some(user => {
                return user.email === req.body.email;
            });
            if (result || name.length < 1 || name.length > 20 || Number.isInteger(name) || password.length < 5 ||
                email.length < 10 || email.length > 50 || !email.includes('@')) {
                throw new Error('User is not valid');
            }
            next();
        } catch (err) {
            res.status(400).json(err.message);
        }
    }
}