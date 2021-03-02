const Joi = require('joi');

const { constants: { CURRENT_YEAR } } = require('../../constant');

module.exports = Joi.object({
    producer: Joi.string().alphanum().min(2).max(50),
    model: Joi.string().alphanum().min(2).max(50),
    year: Joi.number().positive().integer().min(1950)
        .max(CURRENT_YEAR),
    price: Joi.number().positive().min(1500).max(15000000)
});
