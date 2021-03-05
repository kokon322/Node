const { User, O_AUTH } = require('../model');

const { passwordHasher, tokenizer } = require('../helper');

const { ERROR_MESSAGES: { AUTH_NO_USER } } = require('../constant');

module.exports = {
    authorization: async (email, password) => {
        const user = await User.find({ email });

        if (!user) {
            throw new Error(AUTH_NO_USER);
        }

        await passwordHasher.compare(password, user[0].password);

        const tokens = tokenizer();

        await O_AUTH.create({ ...tokens, _user_id: user[0]._id });

        return tokens;
    }
};
