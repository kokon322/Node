const jwt = require('jsonwebtoken');

const { ErrorHandler } = require('../errors');
const { ErrorMessage, Constant: { AUTHORIZATION } } = require('../constants');
const { JWT_SECRET } = require('../configs/config');
const { Models: { Auth } } = require('../dataBase');

const checkAccessToken = async (req, res, next) => {
    try {
        const access_token = req.get(AUTHORIZATION);

        if (!access_token) {
            throw new ErrorHandler(ErrorMessage.TOKEN_IS_REQUIRED);
        }

        jwt.verify(access_token, JWT_SECRET, err => {
            if (err) {
                throw new ErrorHandler(ErrorMessage.TOKEN_IS_NOT_VALID);
            }
        });

        const tokens = await Auth.findOne({ access_token }).populate('_user_id');

        if (!tokens) {
            throw new ErrorHandler(ErrorMessage.TOKEN_IS_REQUIRED);
        }

        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    checkAccessToken
};
