const User = require('../dataBase/models/User');

module.exports = {
    createUserInDb: async (user) => {
        await User.create(user);
    },

    getUsersFromDb: async (query) => {
        await User.find(query);
    },

    updateUser: async (query, body) => {
        await User.updateOne(query, body);
    },

    deleteUser: async (query) => {
        await User.findOneAndRemove(query);
    }
};
