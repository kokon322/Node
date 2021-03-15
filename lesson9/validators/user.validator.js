const Joi = require('joi');

const { RegExp: { EMAIL_REGEX, PASSWORD_REGEXP } } = require('../constants');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    email: Joi
        .string()
        .regex(EMAIL_REGEX)
        .required(),
    password: Joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required(),
    age: Joi
        .number()
        .integer()
        .positive()
        .min(12)
        .max(110)
        .required()
});
