const express = require('express');
const mongoose = require('mongoose');

const pathToDB = require('./constant/dataBase');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

_connectDB();

app.use('/', apiRouter);

app.listen(port, () => {
    console.log('server is work');
});

function _connectDB() {
    mongoose.connect(pathToDB.nameDB, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}
