const { Schema, model } = require('mongoose');

const authSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Auth', authSchema);
