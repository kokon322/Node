const Joi = require('joi');

module.exports = Joi.object({
    producer: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50),
    model: Joi
        .string()
        .alphanum()
        .min(1)
        .max(50),
    year: Joi
        .number()
        .positive()
        .integer()
        .min(1950)
        .max(2021)
});
