const router = require('express').Router();

const {
    clientController: {
        getAllClients, createClient, deleteClient, getClientById
    }
} = require('../controller');

const { clientMiddleware: { isClientWithIdRegistered } } = require('../middleware');

router
    .post('/', createClient)
    .get('/', getAllClients);

router
    .use('/:Id', isClientWithIdRegistered);

router
    .get('/:Id', getClientById)
    .delete('/:Id', deleteClient);

module.exports = router;
