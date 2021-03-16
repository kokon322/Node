const dotenv = require('dotenv');
const express = require('express');

const { PORT } = require('./config/config');
const apiRouter = require('./router/api.router');
const db = require('./dataBase').getInstance();

dotenv.config();

const app = express();

db.setModels();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.json(err.message);
});

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
});
