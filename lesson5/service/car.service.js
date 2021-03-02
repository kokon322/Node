const Car = require('../dataBase/model/Car');

module.exports = {
    createNewCar: (body) => Car.create(body),

    readCar: (query) => Car.find(query),

    updateOneCar: (query, body) => Car.updateOne(query, body),

    deleteOneCar: (query) => Car.deleteOne(query)
};
