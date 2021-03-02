const router = require('express').Router();
const {
    createNewUser, readUser, updateOneUser, deleteOneUser
} = require('../controller/user.controller');

router
    .post('/', createNewUser)
    .get('/', readUser)
    .put('/', updateOneUser)
    .delete('/', deleteOneUser);

module.exports = router;
