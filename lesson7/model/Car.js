const { Schema, model } = require('mongoose');

const { DATA_BASE: { CAR } } = require('../constant');

const carSchema = new Schema({
    producer: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true }
});

module.exports = model(CAR, carSchema);
