const { Models: { User, Auth } } = require('../dataBase');
const { passwordHesher, tokinizer } = require('../helpers');
const { ErrorHandler } = require('../errors');
const { ErrorMessage: { AUTH_NO_USER } } = require('../constants');

const authorization = async (email, password) => {
    const user = await User.find({ email });

    if (!user) {
        throw new ErrorHandler(AUTH_NO_USER);
    }

    await passwordHesher.compare(password, user[0].password);

    const tokens = tokinizer();

    await Auth.create({ ...tokens, _user_id: user[0]._id });

    return tokens;
};

module.exports = {
    authorization
};
