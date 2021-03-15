const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;

const { updateCar } = require('../services/car.service');
const { updateUser } = require('../services/user.service');

const carFileHelper = async (docs, photos, car) => {
    if (photos.length > 0) {
        const pathToCarPhotos = path.join('car', `${car._id}`, 'photos');

        const photoDir = path.join(process.cwd(), 'lesson9', 'static', pathToCarPhotos);

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

        const docsDir = path.join(process.cwd(), 'lesson9', 'static', pathToCarDocs);

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

const userFileHelper = async (avatar, user) => {
    const pathToUserPhotos = path.join('user', `${user._id}`, 'photos');
    const photoDir = path.join(process.cwd(), 'lesson9', 'static', pathToUserPhotos);

    const fileExtension = avatar.name.split('.').pop();

    const photoName = `${uuid()}.${fileExtension}`;

    const finalPhotoPath = path.join(photoDir, photoName);

    await fs.mkdir(photoDir, { recursive: true });
    await avatar.mv(finalPhotoPath);

    user.avatar = path.join(pathToUserPhotos, photoName);

    await updateUser({ _id: user._id }, user);
};

module.exports = {
    carFileHelper,
    userFileHelper
};
