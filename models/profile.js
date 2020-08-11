
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  navColor:{ type: String },
  navText:{ type: String },
  navImage: { type: String },
  introText: { type: String },
  introTitle: { type: String },
  bio: { type: String },
  aboutBgColor: { type: String },
  profileImage: { type: String },
  ProjectOneTitle: { type: String },
  ProjectOneText: { type: String },
  ProjectOneUrl: { type: String },
  ProjectTwoTitle: { type: String },
  ProjectTwoText: { type: String },
  ProjectTwoUrl: { type: String },
  ProjectThreeTitle: { type: String },
  ProjectThreeText: { type: String },
  ProjectThreeUrl: { type: String },
  resumeUrl: { type: String },
  githubLink:{ type: String },
  linkdin:{ type: String },
  footer: { type: String },
  date: { type: Date, default: Date.now },
  // CustomPage {    }


});

module.exports = mongoose.model('profile', userSchema);

