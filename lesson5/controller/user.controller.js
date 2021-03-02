const {
    userService: {
        createNewUser, readUser, updateOneUser, deleteOneUser
    }
} = require('../service');

module.exports = {
    createNewUser: async (req, res) => {
        try {
            await createNewUser(req.body);
            res.json('user created');
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
            res.json('user updated');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteOneUser: async (req, res) => {
        try {
            await deleteOneUser(req.query);
            res.json('user deleted');
        } catch (err) {
            res.json(err.message);
        }
    }
};
