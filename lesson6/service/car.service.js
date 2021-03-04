const { Car } = require('../model');

module.exports = {
    createCar: (car) => Car.create(car),

    readCar: (query) => Car.find(query),

    updateCar: (query, car) => Car.updateOne(query, car),

    deleteCar: (query) => Car.deleteOne(query)
};
