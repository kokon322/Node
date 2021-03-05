const { authService: { authorization } } = require('../service');

module.exports = {
    auth: async (req, res) => {
        try {
            const { email, password } = req.body;

            const tokens = await authorization(email, password);

            res.json(tokens);
        } catch (err) {
            res.json(err.message);
        }
    }
};
