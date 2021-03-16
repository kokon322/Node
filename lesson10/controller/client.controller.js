const { clientService: { findAllClients } } = require('../service');

const getAllClients = async (req, res, next) => {
    try {
        const clients = await findAllClients();

        res.json(clients);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllClients
};
