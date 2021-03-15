const { Models: { User } } = require('../dataBase');

const createUser = (user) => User.create(user);

const readUsers = (query = {}) => {
    const { limit = 20, page = 1, ...filters } = query;

    const skip = (page - 1) * limit;

    const keys = Object.keys(filters);
    const filterObject = {};

    keys.forEach(key => {
        switch (key) {
            case 'ageGte':
                filterObject.age = { ...filterObject.age, $gte: filters.ageGte };
                break;
            case 'ageLte':
                filterObject.age = { ...filterObject.age, $lte: filters.ageLte };
                break;
            case 'name':
                filterObject.name = { $regex: filters.name, $options: 'i' };
                break;
            case 'email':
                filterObject.email = { $regex: filters.email, $options: 'i' };
                break;
            default:
                filterObject[key] = filters[key];
        }
    });

    return User.find(filterObject).limit(limit).skip(skip);
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
