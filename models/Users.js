const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  avatar: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String},
  navColor:{ type: String },
  navText:{ type: String },
  backgroundColor: { type: String },
  bio: { type: String },
  githubLink:{ type: String },
  linkdin:{ type: String },
  footer: { type: String },
  published_portfolio: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', userSchema);