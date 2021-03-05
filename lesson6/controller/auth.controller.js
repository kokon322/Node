const { User, O_AUTH } = require('../model');

const { passwordHasher, tokenizer } = require('../helper');

module.exports = {
    auth: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.find({ email });

            if (!user) {
                throw new Error('No user');
            }

            await passwordHasher.compare(password, user[0].password);

            const tokens = tokenizer();

            await O_AUTH.create({ ...tokens, _user_id: user[0]._id });

            res.json(tokens);
        } catch (err) {
            res.json(err.message);
        }
    }
};
