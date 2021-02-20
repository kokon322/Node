const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const {getAllUsers, addUserForEmail, login, getUserById, testSend} = require('./allFunctions');

const app = express();

app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log(`server is work`);
});

app.get('/users', ((req, res) => {
    getAllUsers().then(value => {
        res.render('allUsers', {value});
    });
}));

app.get('/', ((req, res) => {
    res.render('registration');
}));

app.post('/', ((req, res) => {
    addUserForEmail(req.body).then(value => {
        res.redirect('/users');
    }).catch(value => {
        testSend(req, res, value, '/error');
    });
}));

app.get('/login', ((req, res) => {
    res.render('login');
}));

app.post('/login', ((req, res) => {
    const {password, email} = req.body;
    login(email, password).then(value => {
        res.render('user', {value})
    }).catch(value => {
        testSend(req, res, value, '/error')
    });
}));

app.get('/users/:id', ((req, res) => {
    getUserById(req.params.id).then(value => {
        res.render('user', {value});
    }).catch(value => {
        testSend(req, res, value, '/error')
    });
}));

app.get('/error', (req, res) => {
    const message = req.session.message;
    res.render('error', {message});
});