const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { PORT, MONGO_URL } = require('./configs/config');
const apiRouter = require('./routers/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

_ConnectToDb();

app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log('5000 work');
});

function _ConnectToDb() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
