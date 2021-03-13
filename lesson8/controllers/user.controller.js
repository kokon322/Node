const { userService, mailService: { sendMail } } = require('../services');
const { SuccessMessage, emailActions: { WELCOME, USER_UPDATED, USER_DELETED } } = require('../constants');
const { passwordHesher: { hash } } = require('../helpers');
const { fileHelper: { userFileHelper } } = require('../helpers');

const createUser = async (req, res, next) => {
    try {
        const { body: { password, email, name }, files: { avatar } } = req;

        const hashPassword = await hash(password);

        const user = await userService.createUser({ ...req.body, password: hashPassword });

        if (avatar) {
            await userFileHelper(avatar, user);
        }

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
        const { email, name, password } = req.body;

        const hashPassword = await hash(password);

        await userService.updateUser(req.query, { ...req.body, password: hashPassword });

        await sendMail(email, USER_UPDATED, { userName: name });
        res.json(SuccessMessage.USER_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { query } = req;

        const user = await userService.readUser(query);

        await sendMail(user[0].email, USER_DELETED, { userName: user[0].name });

        await userService.deleteUser(query);

        res.json(SuccessMessage.USER_DELETED);
    } catch (e) {
        next(e);
    }
};

const getOneUser = async (req, res, next) => {
    try {
        const { query } = req;

        const user = await userService.getOneUser(query);

        res.json(user);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    getOneUser
};
