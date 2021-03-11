const { userService, mailService: { sendMail } } = require('../services');
const { SuccessMessage, emailActions: { WELCOME, USER_UPDATED, USER_DELETED } } = require('../constants');
const { passwordHesher: { hash } } = require('../helpers');

const createUser = async (req, res, next) => {
    try {
        const { password, email, name } = req.body;

        const hashPassword = await hash(password);

        await userService.createUser({ ...req.body, password: hashPassword });

        await sendMail(email, WELCOME, { userName: name });

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

        const { email, name } = req.body;

        await sendMail(email, USER_UPDATED, { userName: name });
        res.json(SuccessMessage.USER_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const user = await readUser(req.query);

        await sendMail(user[0].email, USER_DELETED, { userName: user[0].name });

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
