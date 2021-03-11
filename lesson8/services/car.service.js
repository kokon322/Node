const { Models: { Car } } = require('../dataBase');

const createNewCar = (car) => Car.create(car);

const readCar = (query) => Car.find(query);

const updateCar = (query, car) => Car.updateOne(query, car);

const deleteCar = (query) => Car.deleteOne(query);

module.exports = {
    createNewCar,
    readCar,
    updateCar,
    deleteCar
};
