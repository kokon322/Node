const Joi = require('joi');

module.exports = Joi.object({
    idClient: Joi
        .number()
        .integer()
        .positive()
        .min(1)
        .required(),
    FirstName: Joi
        .string()
        .alphanum()
        .min(2)
        .max(255)
        .required(),
    LastName: Joi
        .string()
        .alphanum()
        .min(2)
        .max(255)
        .required(),
    Education: Joi
        .string()
        .alphanum()
        .min(2)
        .max(255)
        .required(),
    Passport: Joi
        .string()
        .min(5)
        .max(15)
        .required(),
    City: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    Age: Joi
        .string()
        .min(2)
        .required(),
    Department_idDepartment: Joi
        .number()
        .integer()
        .positive()
        .min(1)
        .max(10),
});
