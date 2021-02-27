const router = require('express').Router();

const userController = require('../controller/user.controller');

router.get('/', userController.getAllUsers)
    .post('/', userController.createUser)
    .delete('/', userController.deleteUser);

module.exports = router;
