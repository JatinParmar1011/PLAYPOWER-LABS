import express from 'express';
import { submitQuiz, getResults } from '../controller/result.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Submit quiz results
router.post('/submit', verifyToken, submitQuiz);

// Get results for a specific user
router.get('/results', verifyToken, getResults);

export default router;
