const User = require('../dataBase/models/User');

module.exports = {
    getAllUsersFromDb: () => User.find(),
    createUserInDb: (user) => User.create(user),
    deleteUser: (id) => User.deleteOne({ _id: id.id }, (err) => {
        console.log(err);
    })
};
