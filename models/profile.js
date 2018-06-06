
const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   content: String,
//   user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
// });

const profileSchema = new mongoose.Schema({
  company: String,
  name: String,
  website: String,
  Email: String,
  image: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
  // comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
