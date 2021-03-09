const { Schema, model } = require('mongoose');

const { DATA_BASE: { O_AUTH } } = require('../constant');

const oAuthSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = model(O_AUTH, oAuthSchema);
