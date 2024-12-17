export const generateQuestions = (gradeLevel, subject) => {
  return new Promise((resolve) => {
    let questions = [];

    // Example: Basic Math Questions for Elementary School
    if (gradeLevel === '1' && subject === 'Math') {
      questions = [
        { question: 'What is 2+2?', answer: '4' },
        { question: 'What is 5+3?', answer: '8' },
      ];
    }

    // Example: Geography Questions for High School
    else if (gradeLevel === '10' && subject === 'Geography') {
      questions = [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'What is the largest continent?', answer: 'Asia' },
      ];
    }

    // Example: History Questions for Middle School
    else if (gradeLevel === '8' && subject === 'History') {
      questions = [
        { question: 'Who was the first president of the United States?', answer: 'George Washington' },
        { question: 'In which year did World War I begin?', answer: '1914' },
      ];
    }

    // Default: If no matching gradeLevel or subject, return a generic set of questions
    else {
      questions = [
        { question: 'What is 2+2?', answer: '4' },
        { question: 'What is the capital of France?', answer: 'Paris' },
      ];
    }

    resolve(questions);
  });
};
