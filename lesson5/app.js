const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');
const { constants: { PORT, URL_DB } } = require('./constant');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

_connectDb();

app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log('server work');
});

function _connectDb() {
    mongoose.connect(URL_DB, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
