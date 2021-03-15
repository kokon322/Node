const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const path = require('path');

dotenv.config();

const { PORT, MONGO_URL } = require('./configs/config');
const apiRouter = require('./routers/api.router');

const app = express();

app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

_ConnectToDb();

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.json(err.message);
});

app.listen(PORT, () => {
    console.log(`${PORT} is work`);
});

function _ConnectToDb() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
