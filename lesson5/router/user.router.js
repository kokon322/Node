const router = require('express').Router();

const {
    userController: {
        createNewUser, readUser, updateOneUser, deleteOneUser
    }
} = require('../controller');

const {
    userMiddleware: {
        isUserValid, isQueryValid, isUserRegister, isUserInDb
    }
} = require('../middleware');

router
    .post('/', isUserInDb, isUserValid, createNewUser)
    .get('/', isQueryValid, readUser)
    .put('/', isUserValid, isUserRegister, updateOneUser)
    .delete('/', isQueryValid, deleteOneUser);

module.exports = router;
