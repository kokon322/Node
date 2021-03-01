const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    createUserInDb: (user) => User.create(user),

    getUsersFromDb: (query) => User.find(query),

    updateUser: (query, body) => User.updateOne(query, body),

    deleteUser: (query) => User.findOneAndRemove(query)
};
