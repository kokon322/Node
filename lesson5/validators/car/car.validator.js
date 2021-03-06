const Joi = require('joi');

const { constants: { CURRENT_YEAR } } = require('../../constant');

module.exports = Joi.object({
    producer: Joi.string().alphanum().min(2).max(50)
        .required(),
    model: Joi.string().alphanum().min(2).max(50)
        .required(),
    year: Joi.number().positive().integer().min(1950)
        .max(CURRENT_YEAR)
        .required(),
    price: Joi.number().positive().min(1500).max(15000000)
        .required()
});
