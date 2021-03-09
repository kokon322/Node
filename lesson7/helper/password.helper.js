const bcrypt = require('bcrypt');

const { ERROR_MESSAGES: { EMAIL_OR_PASSWORD_WRONG } } = require('../constant');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hashPassword) => {
        const passwordEquals = await bcrypt.compare(password, hashPassword);

        if (!passwordEquals) {
            throw new Error(EMAIL_OR_PASSWORD_WRONG);
        }
    }
};
