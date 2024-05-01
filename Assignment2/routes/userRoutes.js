import express from 'express';
import * as userController from '../controllers/userController.js'

const router = express.Router();

//Get all user
router.get('/', userController.getAllUsers);

//Get user by ID
router.get('/getUserById/:id', userController.getUserById);

//Creating a new user
router.post('/', userController.createUser);

//Login
router.post('/login', userController.login);

export default router;