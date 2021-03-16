const db = require('../dataBase').getInstance();

const findAllClients = () => {
    const ClientModel = db.getModel('Client');

    console.log(ClientModel);

    return ClientModel.findAll();
};

module.exports = {
    findAllClients
};
