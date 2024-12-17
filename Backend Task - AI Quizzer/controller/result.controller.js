import Result from '../models/Result.model.js';

export const submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  const userId = req.user.id; // Assuming 'user' is set by a previous middleware like JWT verification

  // Validate the input
  if (!quizId || !answers || !Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ error: 'Quiz ID and answers are required.' });
  }

  // Calculate the score (Assumes answers array contains correct answers)
  const score = answers.filter((answer, index) => answer === 'correctAnswer').length;

  try {
    // Create a new result document
    const result = await Result.create({ userId, quizId, score });

    // Return the result with a success message
    res.status(200).json({ message: 'Quiz submitted successfully', result });
  } catch (error) {
    console.error('Error submitting quiz:', error.message);
    res.status(500).json({ error: 'An error occurred while submitting the quiz. Please try again later.' });
  }
};

export const getResults = async (req, res) => {
  const { userId, quizId, fromDate, toDate } = req.query;

  // Validate query parameters
  if (!userId || !quizId) {
    return res.status(400).json({ error: 'User ID and Quiz ID are required.' });
  }

  const filter = { userId, quizId };

  // Add date filters if provided
  if (fromDate && toDate) {
    filter.completedAt = { $gte: new Date(fromDate), $lte: new Date(toDate) };
  }

  try {
    // Retrieve the results from the database
    const results = await Result.find(filter);

    // Return the results
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching results:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching the results. Please try again later.' });
  }
};
