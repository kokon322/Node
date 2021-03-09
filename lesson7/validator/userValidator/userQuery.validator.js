const Joi = require('joi');

const { REGEXP: { EMAIL_REGEX } } = require('../../constant');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50),
    email: Joi
        .string()
        .regex(EMAIL_REGEX),
    age: Joi
        .number()
        .integer()
        .positive()
        .min(12)
        .max(110)
});
