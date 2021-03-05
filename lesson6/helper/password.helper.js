const bcrypt = require('bcrypt');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hashPassword) => {
        const passwordEquals = await bcrypt.compare(password, hashPassword);

        if (!passwordEquals) {
            throw new Error('Email or password is WRONG');
        }
    }
};
