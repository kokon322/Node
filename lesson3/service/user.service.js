const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToDB = path.join(process.cwd(), 'lesson3', 'dataBase', 'users.txt');

module.exports = {
    getAllUsers: async () => {
        try {
            const allUsers = await readFile(pathToDB);
            return JSON.parse(allUsers.toString());
        } catch (e) {
            console.log(e);
        }
    },
    getUserById: async (id) => {
        try {
            const data = await readFile(pathToDB);
            let allUsers = JSON.parse(data.toString());
            return allUsers.filter(user => {
                return +user.id === +id;
            });
        } catch (err) {
            console.log(err);
        }
    },
    createUser: async (user) => {
        try {
            const data = await readFile(pathToDB);
            let allUsers = JSON.parse(data.toString());
            user.id = allUsers.length + 1;
            allUsers.push(user);
            await writeFile(pathToDB, JSON.stringify(allUsers));
        } catch (err) {
            console.log(err);
        }

    },
    deleteUserById: async (id) => {
        try {
            const data = await readFile(pathToDB);
            let allUsers = JSON.parse(data.toString());
            const resultArrayUsers = allUsers.filter(user => {
                return +user.id !== +id;
            });
            await writeFile(pathToDB, JSON.stringify(resultArrayUsers));
        } catch (err) {
            console.log(err);
        }
    }
}