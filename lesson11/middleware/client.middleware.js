const { clientService } = require('../service');
const { clientValidator } = require('../validator');
const { ErrorHandler, Error: { NOT_PRESENT_IN_DB, CLIENT_IS_NOT_VALID } } = require('../error');

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

const isClientValid = async (req, res, next) => {
    try {
        const { error } = await clientValidator.validate(req.body);
        console.log(error);
        if (error) {
            throw new ErrorHandler(CLIENT_IS_NOT_VALID.message, CLIENT_IS_NOT_VALID.status);
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    isClientWithIdRegistered,
    isClientValid
};
