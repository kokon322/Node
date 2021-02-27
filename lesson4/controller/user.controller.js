const userService = require('../service/user.service');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const allUsers = await userService.getAllUsersFromDb();
            res.json(allUsers);
        } catch (err) {
            res.json(err.message);
        }
    },
    createUser: async (req, res) => {
        try {
            const result = await userService.createUserInDb();
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const result = await userService.deleteUser();
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    }
};
