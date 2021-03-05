const jwt = require('jsonwebtoken');

const { O_AUTH } = require('../model');
const { JWT_SECRET } = require('../config/config');
const { CONSTANT: { AUTHORIZATION } } = require('../constant');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new Error('Token is required');
            }

            jwt.verify(access_token, JWT_SECRET, err => {
                if (err) {
                    throw new Error('not valid token');
                }
            });

            const tokens = await O_AUTH.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new Error('Token is required');
            }

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
