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
            return 'this email already exists'
        }
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


module.exports = {
    getAllUsers,
    addUserForEmail,
}