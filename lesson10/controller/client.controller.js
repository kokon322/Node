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

const getClientById = (req, res, next) => {
    try {
        res.json(req.client);
    } catch (err) {
        next(err);
    }
};

const deleteClient = async (req, res, next) => {
    try {
        const { Id } = req.params;

        const result = await clientService.deleteClient(Id);

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
