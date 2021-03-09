const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const apiRouter = require('./router/api.router');
const { PORT, MONGO_URL } = require('./config/config');

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

_connectToDb();

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.status(err.status).json(err.message);
});

app.listen(PORT, () => {
    console.log('api work');
});

function _connectToDb() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
