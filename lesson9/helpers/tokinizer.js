const jwt = require('jsonwebtoken');

const { JWT_REFRESH, JWT_SECRET } = require('../configs/config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: '10m' });
    const refresh_token = jwt.sign({}, JWT_REFRESH, { expiresIn: '30m' });

    return { access_token, refresh_token };
};
