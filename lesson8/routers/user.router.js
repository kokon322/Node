const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');
const { authMiddleware } = require('../middlewares');

router
    .post('/', userMiddleware.isUserValid, userMiddleware.isUserPresentForCreate, userController.createUser);

router
    .use(authMiddleware.checkAccessToken, userMiddleware.isQueryForSearchValid, userMiddleware.isUserPresent)
    .get('/', userController.readUser)
    .put('/', userMiddleware.isUserValid, userController.updateUser)
    .delete('/', userController.deleteUser);

module.exports = router;
