module.exports = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/homeWork2021',
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH: process.env.JWT_REFRESH || 'REFRESH',
    PORT: 5000,
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'test',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '45415',
};
