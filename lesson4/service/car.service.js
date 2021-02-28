const Car = require('../dataBase/models/Car');

module.exports = {
    createCarToDb: async (car) => {
        await Car.create(car);
    },

    getCarFromDb: async (query) => {
        const cars = await Car.find(query);
        return cars;
    },

    updateCar: async (query, body) => {
        await Car.updateOne(query, body);
    },

    deleteCarFromDb: async (query) => {
        await Car.deleteOne(query);
    }
};
