const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, allowNull: false, unique: true },
  //password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  credit_card: { type: String },
  payment: { type: String },
  linked: { type: String },
  github: { type: String },
  avatar: { type: String },
  //For testing purpose only
  occupation: { type: String },
  city: { type: String },
  bio: { type: String },

  published_portfolio: { type: String },
  date: { type: Date, default: Date.now },


});

module.exports = mongoose.model('user', userSchema);
