const jwt = require('jsonwebtoken');

const { O_AUTH } = require('../model');
const { JWT_SECRET } = require('../config/config');
const { CONSTANT: { AUTHORIZATION } } = require('../constant');
const { ERROR_MESSAGES: { TOKEN_IS_NOT_VALID, TOKEN_IS_REQUIRED } } = require('../constant');
const { ErrorHandler } = require('../error');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new ErrorHandler(TOKEN_IS_REQUIRED, 418);
            }

            jwt.verify(access_token, JWT_SECRET, err => {
                if (err) {
                    throw new ErrorHandler(TOKEN_IS_NOT_VALID, 401);
                }
            });

            const tokens = await O_AUTH.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new ErrorHandler(TOKEN_IS_REQUIRED, 418);
            }

            next();
        } catch (err) {
            next(err);
        }
    }
};
