const router = require('express').Router();

const {
    userController: {
        createNewUser, readUser, updateOneUser, deleteOneUser
    }
} = require('../controller');

router
    .post('/', createNewUser)
    .get('/', readUser)
    .put('/', updateOneUser)
    .delete('/', deleteOneUser);

module.exports = router;
