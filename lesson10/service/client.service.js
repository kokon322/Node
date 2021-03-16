const db = require('../dataBase').getInstance();

const getClientModel = () => db.getModel('Client');

const createClient = (client) => getClientModel().create(client);

const findAllClients = (query) => getClientModel().findAll({ where: query });

const deleteClient = (id) => getClientModel().destroy({ where: { idClient: id } });

const getClientById = (id) => getClientModel().findByPk(id);

module.exports = {
    createClient,
    findAllClients,
    deleteClient,
    getClientById
};
