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

// Вам потрібно реалізувати мінімум 5 строрінок.
// 1) Реєстрація
// 2) Логінація.
// 3) Список всіх юзерів.
// 4) Інформація про одного юзера
// 5) Помилка
//
// При реєстрації юзер вводть мейл, нік та пороль і ви його данні дописуєте в файл.
// Але тільки якщо його немає ще. Якшо він є, то видаєте помилку.
// Після реєстрації переходите на сторінку зі всіма юзерми.
//
//При логінації юзер так само ввоить мейл та пароль і вам необхідно знайти його мейлик в списку юзерів та якщо такий мейлик з таким паролем є,
//то віддати інформацію про юзера. В інакшому випадку сказати, що необхідно реєструватись.

app.listen(5000, () => {
    console.log(`server is work`);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/users', ((req, res) => {
    getAllUsers().then(value => {
        res.render('allUsers', {value});
    });
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////,
app.get('/', ((req, res) => {
    res.render('registration');
}));

app.post('/', ((req, res) => {
    addUserForEmail(req.body).then(value => {
        res.redirect('/users');
    }).catch(value => {
        testSend(req, res, value, '/error');
    })
}))

////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/login', ((req, res) => {
    res.render('login');
}));

app.post('/login', ((req, res) => {
    const {password, email} = req.body;
    login(email, password).then(value => {
        console.log(value);
        res.render('user', {value})
    }).catch(value => {
        testSend(req, res, value, '/error')
    })
}));
////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/users/:id', ((req, res) => {
    getUserById(req.params.id).then(value => {
        console.log(value);
    })
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/error', (req, res) => {
    const message = req.session.message;
    res.render('error', {message});
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////