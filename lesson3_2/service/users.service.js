const { promisify } = require('util');

const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);

const pathToDbUsers = path.join(__dirname, 'newDataBase', 'users.txt');

module.exports = {
    getAllUserFromDb: async () => {
        const allUsers = await readFile(pathToDbUsers);

        return allUsers;
    }
};
