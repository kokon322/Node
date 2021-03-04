const {
    userService: {
        createUser, readUser, updateUser, deleteUser
    }
} = require('../service');

module.exports = {
    createUser: async (req, res) => {
        try {
            await createUser(req.body);

            res.json('User created');
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

            res.json('User update');
        } catch (err) {
            res.json(err.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            await deleteUser(req.query);

            res.json('User deleted');
        } catch (err) {
            res.json(err.message);
        }
    }
};
