
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  navColor:{ type: String },
  navText:{ type: String },
  backgroundColor: { type: String },
  bio: { type: String },
  githubLink:{ type: String },
  linkdin:{ type: String },
  footer: { type: String },
  date: { type: Date, default: Date.now },


});

module.exports = mongoose.model('profile', userSchema);

