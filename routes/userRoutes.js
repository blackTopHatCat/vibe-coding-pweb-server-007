const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/profile', auth, userController.getProfile);
router.get('/users', auth, userController.getAllUsers);
router.get('/users/:id', auth, userController.getUserById);
router.put('/profile', auth, upload.single('profilePicture'), userController.updateProfile);
router.put('/change-password', auth, userController.changePassword);
router.delete('/delete', auth, userController.deleteUser);

module.exports = router;
