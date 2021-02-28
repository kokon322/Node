const { Schema, model } = require('mongoose');

const carSchema = {
    model: { type: String },
    price: { type: Number }
};

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },
    email: { type: String, required: true },
    cars: [carSchema]
});

module.exports = model('User', userSchema);