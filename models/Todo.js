const mongoose = require('mongoose');
const {Schema} = mongoose;


const todoSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }
});


module.exports = mongoose.model('Todo', todoSchema);