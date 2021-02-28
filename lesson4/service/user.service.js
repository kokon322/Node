const User = require('../dataBase/models/User');

module.exports = {
    createUserInDb: async (user) => {
        await User.create(user);
    },

    getUsersFromDb: async (query) => {
        const users = await User.find(query);
        return users;
    },

    updateUser: async (query, body) => {
        await User.updateOne(query, body);
    },

    deleteUser: async (query) => {
        await User.findOneAndRemove(query);
    }
};
