const express = require('express');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use('/', apiRouter);

app.listen(port, () => {
    console.log('server is work');
});
