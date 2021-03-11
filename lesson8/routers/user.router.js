const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

router
    .post('/', userMiddleware.isUserValid, userMiddleware.isUserPresentForCreate, userController.createUser);

router
    .use(userMiddleware.isQueryForSearchValid, userMiddleware.isUserPresent)
    .get('/', userController.readUser)
    .put('/', userMiddleware.isUserValid, userController.updateUser)
    .delete('/', userController.deleteUser);

module.exports = router;
