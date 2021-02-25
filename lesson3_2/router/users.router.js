const router = require('express').Router();

const userController = require('../controller/users.controller');

router.get('/', userController.getAllUsers);

module.exports = router;
