const { Router } = require('express');
const UserController = require('../controllers/User.controller');

const userRouter = Router();

userRouter.post('/registration', UserController.registrationUser);
userRouter.post('/login', UserController.loginUser);

module.exports = userRouter;