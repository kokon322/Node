const router = require('express').Router();

const userController = require('../controller/user.controller');

router.get('/', userController.getUsers)
    .post('/', userController.createUser)
    .put('/', userController.updateUser)
    .delete('/', userController.deleteUser);

module.exports = router;
