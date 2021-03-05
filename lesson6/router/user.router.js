const router = require('express').Router();

const {
    userController: {
        createUser, readUser, updateUser, deleteUser
    }
} = require('../controller');

const {
    userMiddleware: { isQueryValid, isUserValid, isUserRegistration },
    authMiddleware: { checkAccessTokenMiddleware }
} = require('../middleware');

router
    .post('/', isQueryValid, isUserValid, createUser)
    .get('/', isQueryValid, readUser)
    .put('/', checkAccessTokenMiddleware, isQueryValid, isUserRegistration, updateUser)
    .delete('/', checkAccessTokenMiddleware, isQueryValid, isUserRegistration, deleteUser);

module.exports = router;
