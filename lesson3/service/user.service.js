const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToDB = path.join(process.cwd(), 'lesson3', 'dataBase', 'users.txt');

module.exports = {
    getAllUsers: async () => {
        const allUsers = await readFile(pathToDB);

        return JSON.parse(allUsers.toString());
    },


    getUserById: async (id) => {
        const data = await readFile(pathToDB);

        const allUsers = JSON.parse(data.toString());

        return allUsers.filter(user => +user.id === +id);
    },


    createUser: async (user) => {
        const data = await readFile(pathToDB);

        const allUsers = JSON.parse(data.toString());

        user.id = allUsers.length + 1;

        allUsers.push(user);

        await writeFile(pathToDB, JSON.stringify(allUsers));
    },


    deleteUserById: async (id) => {
        const data = await readFile(pathToDB);

        const allUsers = JSON.parse(data.toString());

        const resultArrayUsers = allUsers.filter(user => +user.id !== +id);

        await writeFile(pathToDB, JSON.stringify(resultArrayUsers));
    }
}
