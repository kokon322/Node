const router = require('express').Router();

const { userController } = require('../controllers');

router
    .post('/', userController.createUser)
    .get('/', userController.readUser)
    .put('/', userController.updateUser)
    .delete('/', userController.deleteUser);

module.exports = router;
