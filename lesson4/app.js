const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

// eslint-disable-next-line no-use-before-define
_connectDB();

app.use('/', apiRouter);

app.listen(port, () => {
    console.log('server is work');
});

function _connectDB() {
    mongoose.connect('mongodb://localhost/homeWork2021', { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
