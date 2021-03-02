const router = require('express').Router();

const {
    userController: {
        createNewUser, readUser, updateOneUser, deleteOneUser
    }
} = require('../controller');

const { userMiddleware: { isUserValid } } = require('../middleware');

router
    .post('/', isUserValid, createNewUser)
    .get('/', readUser)
    .put('/', updateOneUser)
    .delete('/', deleteOneUser);

module.exports = router;
