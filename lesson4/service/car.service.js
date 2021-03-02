const Car = require('../dataBase/models/Car');

module.exports = {
    createCarToDb: (body) => Car.create(body),

    getCarFromDb: (query) => Car.find(query),

    updateCar: (query, body) => Car.updateOne(query, body),

    deleteCarFromDb: (query) => Car.deleteOne(query)
};
