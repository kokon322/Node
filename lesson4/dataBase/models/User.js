const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    cars: [{ type: Schema.Types.ObjectId }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('namePlusAge').get(function() {
    return `${this.name}  ${this.age}`;
});

userSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id'
});

userSchema
    .pre('find', function() {
        this.populate('userCars');
    })
    .pre('findOne', function() {
        this.populate('userCars');
    });

module.exports = model('User', userSchema);
