import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  gradeLevel: { 
    type: String, 
    required: true 
  },
  subject: { 
    type: String, 
    required: true 
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question', // Reference to the Question model
    },
  ],
}, { timestamps: true }); // Adding timestamps for createdAt and updatedAt fields

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
