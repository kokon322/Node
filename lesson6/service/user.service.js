const { User } = require('../model');

module.exports = {
    createUser: (user) => User.create(user),

    readUser: (query) => User.find(query),

    updateUser: (query, user) => User.updateOne(query, user),

    deleteUser: (query) => User.deleteOne(query)
};
