const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;

const { userService, mailService: { sendMail } } = require('../services');
const { SuccessMessage, emailActions: { WELCOME, USER_UPDATED, USER_DELETED } } = require('../constants');
const { passwordHesher: { hash } } = require('../helpers');

const createUser = async (req, res, next) => {
    try {
        const { body: { password, email, name }, files: { avatar } } = req;

        const hashPassword = await hash(password);

        const user = await userService.createUser({ ...req.body, password: hashPassword });

        if (avatar) {
            const pathToUserPhotos = path.join('user', `${user._id}`, 'photos');
            const photoDir = path.join(process.cwd(), 'lesson8', 'static', pathToUserPhotos);

            const fileExtension = avatar.name.split('.').pop();

            const photoName = `${uuid()}.${fileExtension}`;

            const finalPhotoPath = path.join(photoDir, photoName);

            await fs.mkdir(photoDir, { recursive: true });
            await avatar.mv(finalPhotoPath);

            user.avatar = path.join(pathToUserPhotos, photoName);

            await userService.updateUser({ _id: user._id }, user);
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
        const user = await userService.readUser(req.query);

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
