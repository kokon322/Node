const {promisify} = require('util');
const path = require('path');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToUsersFile = path.join(__dirname, 'users.txt');

async function addUserForEmail(newUser) {
    try {
        let allUsers = await getAllUsers();
        const result = allUsers.some(user => {
            return user.email === newUser.email;
        });
        if (result) {
            console.log('this email already exists');
            return;
        }
        newUser.id = allUsers.length + 1; // (трохи кастиль)
        allUsers.push(newUser);
        await writeFile(pathToUsersFile, JSON.stringify(allUsers));
    } catch (err) {
        console.log(err);
    }
}

async function getAllUsers() {
    try {
        const data = await readFile(path.join(__dirname, 'users.txt'));
        return JSON.parse(data.toString());
    } catch (err) {
        console.log(err);
    }
}

async function getUserById(id) {
    try {
        const users = await getAllUsers();
        const result = users.some(user => {
            return user.id === id;
        });
        if (!result) {
            console.log('user with this id undefined');
            return;
        }
        const userResult = users.filter(user => user.id === id);
        console.log(userResult);
        return userResult;
    } catch (err) {
        console.log(err);
    }


}

async function login(email, password) {
    try {
        let allUsers = await getAllUsers();
        const result = allUsers.some(user => {
            return user.email === email && user.password === password;
        });
        if (!result) {
            console.log('You are need to registration');
            return;
        }
        const userResult = allUsers.filter(value => value.email === email);
        console.log(userResult);
        return userResult;

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllUsers,
    addUserForEmail,
    login,
    getUserById
}