const router = require('express').Router();

const { authController: { auth } } = require('../controllers');

router.post('/', auth);

module.exports = router;
