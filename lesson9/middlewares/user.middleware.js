const { userService: { getOneUser } } = require('../services');
const { ErrorHandler } = require('../errors');
const { userValidator, queryValidator } = require('../validators');
const { ErrorMessage } = require('../constants');

const isUserValid = async (req, res, next) => {
    try {
        const { error } = await userValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(ErrorMessage.USER_IS_NOT_VALID);
        }

        next();
    } catch (e) {
        next(e);
    }
};

const isUserPresentForCreate = async (req, res, next) => {
    try {
        const result = await getOneUser({ email: req.body.email });
        if (result) {
            throw new ErrorHandler(ErrorMessage.USER_IS_IN_DB);
        }

        next();
    } catch (e) {
        next(e);
    }
};

const isUserPresent = async (req, res, next) => {
    try {
        const result = await (req.query);

        if (result.length <= 0) {
            throw new ErrorHandler(ErrorMessage.USER_IS_NOT_PRESENT_IN_DB);
        }

        next();
    } catch (e) {
        next(e);
    }
};

const isQueryForSearchValid = async (req, res, next) => {
    try {
        const { error } = await queryValidator.validate(req.query);

        if (error) {
            throw new ErrorHandler(ErrorMessage.USER_QUERY_IS_NOT_VALID);
        }

        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    isUserValid,
    isUserPresentForCreate,
    isQueryForSearchValid,
    isUserPresent
};
