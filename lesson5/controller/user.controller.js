const {
    userService: {
        createNewUser, readUser, updateOneUser, deleteOneUser
    }
} = require('../service');

const { passWordHash: { hash } } = require('../helpers');

const { userSuccessMessage: { USER_CREATED, USER_UPDATED, USER_DELETED } } = require('../constant');

module.exports = {
    createNewUser: async (req, res) => {
        try {
            const { password } = req.body;

            const hashPassword = await hash(password);

            await createNewUser({ ...req.body, password: hashPassword });

            res.json(USER_CREATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    readUser: async (req, res) => {
        try {
            const users = await readUser(req.query);

            res.json(users);
        } catch (err) {
            res.json(err.message);
        }
    },

    updateOneUser: async (req, res) => {
        try {
            await updateOneUser(req.query, req.body);

            res.json(USER_UPDATED);
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneUser: async (req, res) => {
        try {
            await deleteOneUser(req.query);

            res.json(USER_DELETED);
        } catch (err) {
            res.json(err.message);
        }
    }
};
