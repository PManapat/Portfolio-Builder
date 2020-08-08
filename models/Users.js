const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String},
  avatar: { type: String },
  published_portfolio: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', userSchema);