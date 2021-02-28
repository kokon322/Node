const userService = require('../service/user.service');

module.exports = {

    createUser: async (req, res) => {
        try {
            await userService.createUserInDb(req.body);

            res.json('user create');
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

            res.json('User updated');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const result = await userService.deleteUser(req.query);

            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    }
};
