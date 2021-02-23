const userService = require('../service/user.service');

module.exports = {
    getAllUsers: async (req, res) => {
        const allUsers = await userService.getAllUsers();
        res.json(allUsers);
    },
    getUserById: async (req, res) => {
        const {userId} = req.params;
        const userWithId = await userService.getUserById(userId);
        res.json(userWithId);
    },
    createUser: (req, res) => {
        res.json('user is create');
    }
}