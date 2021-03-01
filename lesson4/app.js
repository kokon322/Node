const express = require('express');
const mongoose = require('mongoose');

const pathToDB = require('./constant/dataBase');
const apiRouter = require('./router/api.router');
const { port } = require('./constant/api.port');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
