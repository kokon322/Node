const { clientService } = require('../service');
const { Success } = require('../error');

const createClient = async (req, res, next) => {
    try {
        const { body } = req;

        await clientService.createClient(body);

        res.status(Success.CLIENT_CREATED.status).json(Success.CLIENT_CREATED.message);
    } catch (err) {
        next(err);
    }
};

const getAllClients = async (req, res, next) => {
    try {
        const { query } = req;

        const clients = await clientService.findAllClients(query);

        res.status(200).json(clients);
    } catch (err) {
        next(err);
    }
};

const getClientById = (req, res, next) => {
    try {
        res.status(200).json(req.client);
    } catch (err) {
        next(err);
    }
};

const deleteClient = async (req, res, next) => {
    try {
        const { params: { Id } } = req;

        await clientService.deleteClient(Id);

        res.status(Success.CLIENT_DELETED.status).json(Success.CLIENT_DELETED.message);
    } catch (err) {
        next(err);
    }
};

const updateClient = async (req, res, next) => {
    try {
        const { params: { Id }, body } = req;

        await clientService.updateClientById(body, Id);

        res.status(Success.CLIENT_UPDATED.status).json(Success.CLIENT_UPDATED.message);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createClient,
    getAllClients,
    deleteClient,
    getClientById,
    updateClient
};
