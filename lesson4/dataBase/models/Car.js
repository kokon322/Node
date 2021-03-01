const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    producer: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('Car', carSchema);
