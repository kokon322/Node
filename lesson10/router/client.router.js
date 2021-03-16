const router = require('express').Router();

const { clientController: { getAllClients } } = require('../controller');

router
    .get('/', getAllClients);

module.exports = router;
