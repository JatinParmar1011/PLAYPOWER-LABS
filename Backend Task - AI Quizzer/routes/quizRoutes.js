import express from 'express';
import { createQuizController } from '../controller/quiz.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Create quiz route
router.post('/create', verifyToken, createQuizController);

export default router;
