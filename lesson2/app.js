const fs = require('fs');
const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const {getAllUsers, addUserForEmail, login, getUserById} = require('./allFunctions');

const app = express();

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
//
//При реєстрації мейли не можуть повторюватись
app.listen(5000, () => {
    console.log(`server is work`);
});

app.get('/login', ((req, res) => {
    res.render('login');
}));

app.post('/login', ((req, res) => {
    const {email, password} = req.body;
    login(email,password).then(value => {
        let {name, email, id} = value;
        res.render('user', {name, email, id});
    })

}));

app.get('/users', ((req, res) => {

}));

app.get('/users/:id', ((req, res) => {

}));

app.get('/error', ((req, res) => {

}));