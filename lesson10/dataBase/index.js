const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const pathToModel = path.join(process.cwd(), 'lesson10', 'dataBase', 'model');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('bank', 'root', '3245', {
            host: 'localHost',
            dialect: 'mysql'
        });

        const models = {};

        function getModels() {
            fs.readdir(path.join(pathToModel), (err, files) => {
                files.forEach(file => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    models[model] = (require(path.join(pathToModel, model)))(client, DataTypes);
                });
            });
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    };
})();
