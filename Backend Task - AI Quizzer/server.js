import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import resultRoutes from './routes/resultRoutes.js';

dotenv.config();
const app = express();

// Connect to Database with async/await and proper error handling
const startServer = async () => {
  try {
    await connectDB(); // Await database connection
    console.log('Connected to the database');

    // Middleware
    app.use(express.json());
    app.use(cors());

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/quiz', quizRoutes);
    app.use('/api/result', resultRoutes);

    // Global Error Handling Middleware
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something went wrong, please try again later.' });
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit the process if database connection fails
  }
};

// Start the server
startServer();
