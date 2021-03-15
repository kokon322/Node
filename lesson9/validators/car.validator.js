const Joi = require('joi');

module.exports = Joi.object({
    producer: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    model: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    year: Joi
        .number()
        .integer()
        .positive()
        .min(1950)
        .max(2021)
});
