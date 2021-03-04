const bcrypt = require('bcrypt');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: (password, hashPassword) => {
        const passwordEquals = bcrypt.compare(password, hashPassword);

        if (!passwordEquals) {
            throw new Error('Email or password is WRONG');
        }
    }
};
