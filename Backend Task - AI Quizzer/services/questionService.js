import Question from '../models/Question.model.js';

/**
 * Creates multiple questions in the database.
 * @param {Array} questions - Array of question objects to be created.
 * @returns {Array} - Array of ObjectIds for the created questions.
 */
export const createQuestions = async (questions) => {
  // Validate if questions is an array and contains at least one element
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error('Questions must be a non-empty array.');
  }

  try {
    // Insert questions into the database
    const createdQuestions = await Question.insertMany(questions);

    // Return an array of ObjectIds
    return createdQuestions.map((question) => question._id);
  } catch (error) {
    // Handle errors during database insertion
    console.error('Error creating questions:', error.message);
    throw new Error('Error creating questions, please try again later.');
  }
};
