const { authService: { authorization } } = require('../services');

const auth = async (req, res, next) => {
    try {
        const tokens = await authorization(req.body.email, req.body.password);

        res.json(tokens);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    auth
};
