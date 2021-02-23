const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

const pathToDB = path.join(process.cwd(), 'lesson3', 'dataBase', 'users.txt');


module.exports = {
    getAllUsers: async () => {
        try {
            const allUsers = await readFile(pathToDB);
            console.log(allUsers.toString());
            return JSON.parse(allUsers.toString());
        } catch (e) {
            console.log(e);
        }
    },
    getUserById: async (id) => {
        try {
            const data = await readFile(pathToDB);
            let allUsers = JSON.parse(data.toString());
            const result = allUsers.filter(user => {
                return +user.id === +id;
            });
            return result;
        } catch (e) {
            console.log(e);
            return ('dont have user with this ID')
        }
    }
}
