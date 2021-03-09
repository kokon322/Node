const {
    userService: {
        createUser, readUser, updateUser, deleteUser
    },
    emailService: { sendMail }
} = require('../service');

const { passwordHasher: { hash } } = require('../helper');

const { SUCCESS_MESSAGES: { USER_CREATED, USER_UPDATED, USER_DELETED }, EMAIL_ACTION } = require('../constant');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { password, email, name } = req.body;

            const passwordHash = await hash(password);

            await createUser({ ...req.body, password: passwordHash });

            await sendMail(email, EMAIL_ACTION.WELCOME, { userName: name });

            res.json(USER_CREATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    readUser: async (req, res) => {
        try {
            const user = await readUser(req.query);

            res.json(user);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const { email, name } = req.body;

            await updateUser(req.query, req.body);

            await sendMail(email, EMAIL_ACTION.USER_UPDATED, { userName: name });

            res.json(USER_UPDATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { email, name } = await deleteUser(req.query);

            await sendMail(email, EMAIL_ACTION.USER_DELETED, { userName: name });

            res.json(USER_DELETED);
        } catch (err) {
            res.json(err.message);
        }
    }
};
