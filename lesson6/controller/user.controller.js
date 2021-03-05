const {
    userService: {
        createUser, readUser, updateUser, deleteUser
    }
} = require('../service');

const { passwordHasher: { hash } } = require('../helper');

const { SUCCESS_MESSAGES: { USER_CREATED, USER_UPDATED, USER_DELETED } } = require('../constant');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { password } = req.body;

            const passwordHash = await hash(password);

            await createUser({ ...req.body, password: passwordHash });

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
            await updateUser(req.query, req.body);

            res.json(USER_UPDATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            await deleteUser(req.query);

            res.json(USER_DELETED);
        } catch (err) {
            res.json(err.message);
        }
    }
};
