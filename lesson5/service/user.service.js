const { User } = require('../dataBase/model');

module.exports = {
    createNewUser: (body) => User.create(body),

    readUser: (query) => User.find(query),

    updateOneUser: (query, body) => User.updateOne(query, body),

    deleteOneUser: (query) => User.deleteOne(query)
};
