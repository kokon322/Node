const userService = require('../service/user.service');
const successCode = require('../constant/userSuccessCodes.enum');

module.exports = {

    createUser: async (req, res) => {
        try {
            await userService.createUserInDb(req.body);

            res.json(successCode.userCreate);
        } catch (err) {
            res.json(err.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const Users = await userService.getUsersFromDb(req.query);

            res.json(Users);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const { body, query } = req;

            await userService.updateUser(query, body);

            res.json(successCode.userUpdate);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            await userService.deleteUser(req.query);

            res.json(successCode.userDelete);
        } catch (err) {
            res.json(err.message);
        }
    }
};
