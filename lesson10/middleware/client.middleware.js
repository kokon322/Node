const { clientService } = require('../service');
const { ErrorHandler, Error: { NOT_PRESENT_IN_DB } } = require('../error');

const isClientWithIdRegistered = async (req, res, next) => {
    try {
        const { Id } = req.params;

        const client = await clientService.getClientById(Id);

        if (!client) {
            throw new ErrorHandler(NOT_PRESENT_IN_DB.message, NOT_PRESENT_IN_DB.status);
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
