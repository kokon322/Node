const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware, authMiddleware, fileMiddleware } = require('../middlewares');

router
    .post('/',
        fileMiddleware.checkFile,
        fileMiddleware.checkIsPhotoOne,
        userMiddleware.isUserValid,
        userMiddleware.isUserPresentForCreate,
        userController.createUser);

router
    .use(authMiddleware.checkAccessToken, userMiddleware.isUserPresent)
    .get('/', userController.readUser)
    .get('/oneUser', userController.getOneUser)
    .put('/', userMiddleware.isUserValid, userController.updateUser)
    .delete('/', userController.deleteUser);

module.exports = router;
