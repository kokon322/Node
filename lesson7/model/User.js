const { Schema, model } = require('mongoose');

const { DATA_BASE: { USER } } = require('../constant');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model(USER, userSchema);
