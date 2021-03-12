const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;

const { carService } = require('../services');
const { SuccessMessage } = require('../constants');

const createNewCar = async (req, res, next) => {
    try {
        const car = await carService.createNewCar(req.body);

        const { docs } = req;
        const { photos } = req;

        if (photos.length > 0) {
            const pathToCarPhotos = path.join('car', `${car._id}`, 'photos');

            const photoDir = path.join(process.cwd(), 'lesson8', 'static', pathToCarPhotos);

            for (let i = 0; i < photos.length; i++) {
                const fileExtension = photos[i].name.split('.').pop();

                const photoName = `${uuid()}.${fileExtension}`;

                const finalPhotoPath = path.join(photoDir, photoName);

                // eslint-disable-next-line no-await-in-loop
                await fs.mkdir(photoDir, { recursive: true });

                // eslint-disable-next-line no-await-in-loop
                await photos[i].mv(finalPhotoPath);

                car.photos.push(path.join(pathToCarPhotos, photoName));

                // eslint-disable-next-line no-await-in-loop
                await carService.updateCar({ _id: car._id }, car);
            }
        }
        if (docs.length > 0) {
            const pathToCarDocs = path.join('car', `${car._id}`, 'docs');

            const docsDir = path.join(process.cwd(), 'lesson8', 'static', pathToCarDocs);

            for (let i = 0; i < docs.length; i++) {
                const fileExtension = docs[i].name.split('.').pop();

                const docsName = `${uuid()}.${fileExtension}`;

                const finalDocsPath = path.join(docsDir, docsName);

                // eslint-disable-next-line no-await-in-loop
                await fs.mkdir(docsDir, { recursive: true });

                // eslint-disable-next-line no-await-in-loop
                await docs[i].mv(finalDocsPath);

                car.documents.push(path.join(pathToCarDocs, docsName));

                // eslint-disable-next-line no-await-in-loop
                await carService.updateCar({ _id: car._id }, car);
            }
        }

        res.json(SuccessMessage.CAR_CREATED);
    } catch (e) {
        next(e);
    }
};

const readCar = async (req, res, next) => {
    try {
        const car = await carService.readCar(req.query);
        res.json(car);
    } catch (e) {
        next(e);
    }
};

const updateCar = async (req, res, next) => {
    try {
        await carService.updateCar(req.query, req.body);
        res.json(SuccessMessage.CAR_UPDATED);
    } catch (e) {
        next(e);
    }
};

const deleteCat = async (req, res, next) => {
    try {
        await carService.deleteCar(req.query);
        res.json(SuccessMessage.CAR_DELETED);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    createNewCar,
    readCar,
    updateCar,
    deleteCat
};
