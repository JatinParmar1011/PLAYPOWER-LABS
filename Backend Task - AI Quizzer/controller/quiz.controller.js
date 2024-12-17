import { createQuiz } from '../services/quizService.js';

export const createQuizController = async (req, res) => {
  const { title, gradeLevel, subject, questions } = req.body;

  // Validate input data
  if (!title || !gradeLevel || !subject || !questions || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: 'Title, gradeLevel, subject, and at least one question are required.' });
  }

  try {
    // Create quiz by calling the service layer
    const quiz = await createQuiz({ title, gradeLevel, subject, questions });

    // Return success response with the created quiz
    res.status(201).json({
      message: 'Quiz created successfully',
      quiz
    });
  } catch (error) {
    // Return error if something goes wrong during the quiz creation process
    console.error('Error creating quiz:', error.message);
    res.status(500).json({ error: 'An error occurred while creating the quiz. Please try again later.' });
  }
};
