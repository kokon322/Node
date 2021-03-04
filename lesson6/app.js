const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

_connectToDb();

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('5000 work');
});

function _connectToDb() {
    mongoose.connect('mongodb://localhost/homeWork2021', { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
