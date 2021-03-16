const { clientService } = require('../service');

const isClientWithIdRegistered = async (req, res, next) => {
    try {
        const { Id } = req.params;

        const client = await clientService.getClientById(Id);

        if (!client) {
            throw new Error('Client with this id is not present in DB');
        }
        req.client = client;
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    isClientWithIdRegistered
};
