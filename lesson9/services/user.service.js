const { Models: { User } } = require('../dataBase');
const { userQueryBuilder: { userQueryBuilders } } = require('../helpers/query-builder');

const createUser = (user) => User.create(user);

const readUsers = async (query = {}) => {
    const { limit = 20, page = 1, ...filters } = query;

    const result = await userQueryBuilders(limit, page, filters);

    return result;
};

const updateUser = (query, user) => User.updateOne(query, user);

const deleteUser = (query) => User.deleteOne(query);

const getOneUser = (query) => User.findOne(query);

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
    getOneUser
};
