import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    question: { 
      type: String, 
      required: true 
    },
    answer: { 
      type: String, 
      required: true 
    },
  },
  { timestamps: true } // Adding timestamps to track when a question was created or updated
);

const Question = mongoose.model('Question', questionSchema);
export default Question;
