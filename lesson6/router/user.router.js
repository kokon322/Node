const router = require('express').Router();

const {
    userController: {
        createUser, readUser, updateUser, deleteUser
    }
} = require('../controller');

const { userMiddleware: { isQueryValid, isUserValid, isUserRegistration } } = require('../middleware');

router
    .post('/', isQueryValid, isUserValid, createUser)
    .get('/', isQueryValid, readUser)
    .put('/', isQueryValid, isUserRegistration, updateUser)
    .delete('/', isQueryValid, isUserRegistration, deleteUser);

module.exports = router;
