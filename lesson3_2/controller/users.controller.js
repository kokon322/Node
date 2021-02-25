const userService = require('../service/users.service');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userService.getAllUserFromDb();
        res.json(users);
    }
};
