const {
    ADMIN, PASSWORD, DATA_BASE, DIALECT, HOST
} = require('./config');

module.exports = {
    development: {
        username: ADMIN,
        password: PASSWORD,
        database: DATA_BASE,
        host: HOST,
        dialect: DIALECT
    }
};
