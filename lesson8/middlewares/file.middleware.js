const { ErrorHandler } = require('../errors');
const { ErrorMessage } = require('../constants');
const { Constant } = require('../constants');

const checkFile = (req, res, next) => {
    try {
        const documents = [];
        const photos = [];

        const allFiles = Object.values(req.files);

        for (let i = 0; i < allFiles.length; i++) {
            const { size, mimetype } = allFiles[i];

            if (Constant.PHOTOS_MIMETYPE.includes(mimetype) && size <= Constant.PHOTO_MAX_SIZE) {
                photos.push(allFiles[i]);
            } else if (Constant.FILE_MIMETYPE.includes(mimetype) && size <= Constant.FILE_MAX_SIZE) {
                documents.push(allFiles[i]);
            } else {
                throw new ErrorHandler(ErrorMessage.NOT_VALID_FILE);
            }
        }

        req.docs = documents;
        req.photos = photos;

        next();
    } catch (e) {
        next(e);
    }
};

const checkIsPhotoOne = (req, res, next) => {
    try {
        if (req.photos.length > 1) {
            throw new ErrorHandler(ErrorMessage.YOU_MAST_LOAD_ONE_PHOTO);
        }

        next();
    } catch (e) {
        next(e);
    }
};

module.exports = {
    checkFile,
    checkIsPhotoOne
};
