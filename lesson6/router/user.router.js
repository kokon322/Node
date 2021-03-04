const router = require('express').Router();

const {
    userController: {
        createUser, readUser, updateUser, deleteUser
    }
} = require('../controller');

router
    .post('/', createUser)
    .get('/', readUser)
    .put('/', updateUser)
    .delete('/', deleteUser);

module.exports = router;
