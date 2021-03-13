const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;

const { carService: { updateCar } } = require('../services');

const carFileHelper = async (docs, photos, car) => {
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
            await updateCar({ _id: car._id }, car);
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
            await updateCar({ _id: car._id }, car);
        }
    }
};

module.exports = {
    carFileHelper
};
