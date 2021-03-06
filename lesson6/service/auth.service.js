const { User, O_AUTH } = require('../model');

const { passwordHasher, tokenizer } = require('../helper');

const { ERROR_MESSAGES: { AUTH_NO_USER } } = require('../constant');

const { ErrorHandler } = require('../error');

module.exports = {
    authorization: async (email, password) => {
        const user = await User.find({ email });

        if (!user) {
            throw new ErrorHandler(AUTH_NO_USER, 418);
        }

        await passwordHasher.compare(password, user[0].password);

        const tokens = tokenizer();

        await O_AUTH.create({ ...tokens, _user_id: user[0]._id });

        return tokens;
    }
};
