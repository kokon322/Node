const Joi = require('joi');

module.exports = Joi.object({
    producer: Joi.string().alphanum().min(2).max(50)
        .required(),
    model: Joi.string().alphanum().min(2).max(50)
        .required(),
    year: Joi.number().positive().min(1950).max(2021)
        .required(),
    price: Joi.number().positive().min(1500).max(15000000)
        .required()
});
