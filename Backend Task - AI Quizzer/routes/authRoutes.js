import express from 'express';
import { login, register } from '../controller/auth.controller.js';

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

export default router;
