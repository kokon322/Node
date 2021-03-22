const router = require('express').Router();

const {
    clientController: {
        getAllClients, createClient, deleteClient, getClientById, updateClient
    }
} = require('../controller');

const { clientMiddleware: { isClientWithIdRegistered, isClientValid } } = require('../middleware');

router
    .post('/', isClientValid, createClient)
    .get('/', getAllClients);

router
    .use('/:Id', isClientWithIdRegistered);

router
    .put('/:Id', isClientValid, updateClient)
    .get('/:Id', getClientById)
    .delete('/:Id', deleteClient);

module.exports = router;
