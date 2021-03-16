module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH: process.env.JWT_REFRESH || 'REFRESH',
    PORT: 5000,
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'test',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '45415',
    DATA_BASE: process.env.DATA_BASE || 'data',
    ADMIN: process.env.ADMIN || 'admin',
    PASSWORD: process.env.PASSWORD || 'password',
    HOST: process.env.HOST || 'host',
    DIALECT: process.env.DIALECT || 'dialect'
};
