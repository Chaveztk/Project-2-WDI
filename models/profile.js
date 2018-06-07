
const mongoose = require('mongoose');



const profileSchema = new mongoose.Schema({
  company: String,
  name: String,
  website: String,
  email: String,
  image: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}

}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);


// const commentSchema = new mongoose.Schema({
//   content: String,
//   user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
// });

// comments: [commentSchema]
