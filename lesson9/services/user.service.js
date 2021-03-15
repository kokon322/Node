const { Models: { User } } = require('../dataBase');

const createUser = (user) => User.create(user);

const readUser = (query) => User.find(query);

const updateUser = (query, user) => User.updateOne(query, user);

const deleteUser = (query) => User.deleteOne(query);

const getOneUser = (query) => User.findOne(query);

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    getOneUser
};
