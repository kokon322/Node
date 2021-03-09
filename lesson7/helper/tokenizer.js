const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_REFRESH } = require('../config/config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: '30s' });
    const refresh_token = jwt.sign({}, JWT_REFRESH, { expiresIn: '10d' });

    return { access_token, refresh_token };
};
