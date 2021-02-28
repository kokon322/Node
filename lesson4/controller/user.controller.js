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
            await userService.createUserInDb(req.body);
            res.json('user create');
        } catch (err) {
            res.json(err.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            console.log(req.query);
            const result = await userService.deleteUser(req.query);
            res.json(result);
        } catch (err) {
            res.json(err.message);
        }
    }
};
