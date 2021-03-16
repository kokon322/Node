const { clientService } = require('../service');

const createClient = async (req, res, next) => {
    try {
        const { body } = req;

        await clientService.createClient(body);

        res.json(body);
    } catch (err) {
        next(err);
    }
};

const getAllClients = async (req, res, next) => {
    try {
        const { query } = req;

        const clients = await clientService.findAllClients(query);

        res.json(clients);
    } catch (err) {
        next(err);
    }
};

const getClientById = async (req, res, next) => {
    try {
        const { Id } = req.params;

        const client = await clientService.getClientById(Id);

        res.json(client);
    } catch (err) {
        next(err);
    }
};

const deleteClient = async (req, res, next) => {
    try {
        const { query } = req;

        const result = await clientService.deleteClient(query);

        res.json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createClient,
    getAllClients,
    deleteClient,
    getClientById
};
