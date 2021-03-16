const router = require('express').Router();

const {
    clientController: {
        getAllClients, createClient, deleteClient, getClientById
    }
} = require('../controller');

router
    .post('/', createClient)
    .get('/', getAllClients)
    .get('/:Id', getClientById)
    .delete('/', deleteClient);

module.exports = router;
