const bcrypt = require('bcrypt');

const { ErrorMessage } = require('../constants');
const { ErrorHandler } = require('../errors');

const hash = (password) => bcrypt.hash(password, 10);

const compare = async (password, hashPassword) => {
    const passwordEquals = await bcrypt.compare(password, hashPassword);

    if (!passwordEquals) {
        throw new ErrorHandler(ErrorMessage.EMAIL_OR_PASSWORD_WRONG);
    }
};

module.exports = {
    hash,
    compare
};
