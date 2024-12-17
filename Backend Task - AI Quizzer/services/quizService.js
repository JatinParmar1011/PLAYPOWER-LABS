import Quiz from '../models/Quiz.model.js';
import { createQuestions } from './questionService.js';

export const createQuiz = async (quizData) => {
  const { title, gradeLevel, subject, questions } = quizData;

  // Ensure that quizData has valid title, gradeLevel, subject, and questions
  if (!title || !gradeLevel || !subject || !Array.isArray(questions)) {
    throw new Error('Invalid quiz data. Ensure all fields are provided and questions are an array.');
  }

  try {
    // Create the questions and get their ObjectIds
    const questionIds = await createQuestions(questions);

    // Create a new quiz with the question ObjectIds
    const quiz = new Quiz({
      title,
      gradeLevel,
      subject,
      questions: questionIds, // Store the ObjectIds of questions
    });

    // Save the quiz to the database
    await quiz.save();
    return quiz;
  } catch (error) {
    console.error('Error creating quiz:', error);
    throw new Error('Failed to create quiz. Please try again later.');
  }
};
