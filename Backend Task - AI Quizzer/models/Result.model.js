import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',  // Refers to the User model
    required: true 
  },
  quizId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Quiz',  // Refers to the Quiz model
    required: true 
  },
  score: { 
    type: Number, 
    required: true 
  },
  completedAt: { 
    type: Date, 
    default: Date.now // Automatically set the date when the result is created
  }
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
