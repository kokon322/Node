const router = require('express').Router();

const {
    clientController: {
        getAllClients, createClient, deleteClient, getClientById, updateClient
    }
} = require('../controller');

const { clientMiddleware: { isClientWithIdRegistered } } = require('../middleware');

router
    .post('/', createClient)
    .get('/', getAllClients);

router
    .use('/:Id', isClientWithIdRegistered);

router
    .put('/:Id', updateClient)
    .get('/:Id', getClientById)
    .delete('/:Id', deleteClient);

module.exports = router;
