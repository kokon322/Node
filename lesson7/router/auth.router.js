const router = require('express').Router();

const { authController } = require('../controller');

router.post('/', authController.auth);

module.exports = router;
