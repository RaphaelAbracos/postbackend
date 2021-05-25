const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
    minlength: [5, 'Title must be at least 5 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please add a content'],
    minlength: [100, 'Content must be at least 100 characters']
  },
  publish_date:{
    type: Date,
    default: Date.now(),
  },
  tags: {
    type: [String],
  }
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);