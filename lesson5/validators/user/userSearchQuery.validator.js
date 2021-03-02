const Joi = require('joi');

const { regexpEnum: { EMAIL_REGEXP } } = require('../../constant');

module.exports = Joi.object({
    firstName: Joi.string().alphanum().min(2)
        .max(50),
    lastName: Joi.string().alphanum().min(2)
        .max(50),
    age: Joi.number().integer().min(18).max(110),
    email: Joi.string().regex(EMAIL_REGEXP)
});
