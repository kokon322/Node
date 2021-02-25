const { promisify } = require('util');

const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);

const pathToDbUsers = path.join(process.cwd(), 'lesson3_2', 'newDataBase', 'users.txt');

module.exports = {
    getAllUserFromDb: async () => {
        const data = await readFile(pathToDbUsers);

        return JSON.parse(data.toString());
    }
};
