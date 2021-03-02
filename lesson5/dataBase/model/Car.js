const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    producer: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

carSchema.virtual('fullName').get(function() {
    return `${this.producer} ${this.model} ${this.year}`;
});

module.exports = model('Car', carSchema);
