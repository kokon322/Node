module.exports = {
    NOT_PRESENT_IN_DB: {
        message: 'Client with this id is not present in DB',
        status: 400,
    },
    CLIENT_IS_NOT_VALID: {
        message: 'Client is not valid',
        status: 400,
    },
    NOT_VALID_TOKEN: {
        message: 'Token is not valid',
        status: 403
    }
};
