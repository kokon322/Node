const { userService } = require('../services');
const { SuccessMessage } = require('../constants');
const { passwordHesher: { hash } } = require('../helpers');

const createUser = async (req, res, next) => {
    try {
        const { password } = req.body;

        const hashPassword = await hash(password);

        await userService.createUser({ ...req.body, password: hashPassword });

        res.json(SuccessMessage.USER_CREATED);
    } catch (e) {
        next(e);
    }
};

const readUser = async (req, res, next) => {
    try {
        const user = await userService.readUser(req.query);

        res.json(user);
    } catch (e) {
        next(e);
    }
};

const updateUser = async (req, res, next) => {
    try {
        await userService.updateUser(req.query, req.body);

        res.json(SuccessMessage.USER_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req.query);

        res.json(SuccessMessage.USER_DELETED);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};
