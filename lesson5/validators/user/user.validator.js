const Joi = require('joi');

const { regexpEnum: { EMAIL_REGEXP, PASSWORD_REGEXP } } = require('../../constant');

module.exports = Joi.object({
    firstName: Joi.string().alphanum().min(2).max(50)
        .required(),
    lastName: Joi.string().alphanum().min(2).max(50)
        .required(),
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    password: Joi.string().regex(PASSWORD_REGEXP).required()
});
