const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToUsersFile = path.join(__dirname, 'users.txt');

function testSend(req, res, value, url) {
    req.session.message = value;
    res.redirect(url);
} // цей метод піддивився у гуглі.

async function getAllUsers() {
    try {
        const data = await readFile(path.join(__dirname, 'users.txt'));
        return JSON.parse(data.toString());
    } catch (err) {
        console.log(err);
    }
}

async function addUserForEmail(newUser) {
    try {
        const allUsers = await getAllUsers();
        return new Promise((resolve, reject) => {
            const result = allUsers.some(user => user.email === newUser.email);
            if (!result) {
                newUser.id = allUsers.length + 1; // (трохи кастиль)
                allUsers.push(newUser);
                writeFile(pathToUsersFile, JSON.stringify(allUsers));
                resolve('ok');
                // eslint-disable-next-line prefer-promise-reject-errors
            } else reject('this email already exists');
        });
    } catch (err) {
        console.log(err);
    }
}

async function login(email, password) {
    try {
        const allUsers = await getAllUsers();
        return new Promise((resolve, reject) => {
            const result = allUsers.some(user => user.email === email && user.password === password);
            if (result) {
                const userResult = allUsers.filter(value => value.email === email);
                resolve(userResult);
                // eslint-disable-next-line prefer-promise-reject-errors
            } else reject('You mast to registration');
        });
    } catch (e) {
        console.log(e);
    }
}

async function getUserById(id) {
    try {
        const users = await getAllUsers();
        return new Promise((resolve, reject) => {
            const result = users.some(user => +user.id === +id);
            if (result) {
                const userResult = users.filter(user => user.id === id);
                resolve(userResult);
                // eslint-disable-next-line prefer-promise-reject-errors
            } else reject('user with this id undefined');
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllUsers,
    addUserForEmail,
    login,
    getUserById,
    testSend
};
