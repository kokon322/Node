//Задача.
//Вам необхідно реалізувати CRUD на ваших юзерів.
//Мають бути реалізовані такі методи.
// 1) Create user
// 2) Get all users
// 3) Get user by email or name
// 4) Delete current user
//
//Все це має бути розбито по роутах, контроллерах, сервісах з обовязковою перевіркою всього що приходить через мідлвари.
//Також всі меджік стрінги мають бути винесені в константи та закледений "фундамент" під інтернаціоналізацію.
//Юзери мають зберігатися в папці dataBase як JSON.
//Всю роботу з файлами винести в сервіси та зробити це БЕЗ колбеків

const express = require('express');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('server work');
});