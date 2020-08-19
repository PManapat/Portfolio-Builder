
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
  projectOneTitle: { type: String },
  projectOneText: { type: String },
  projectOneUrl: { type: String },
  projectOneImage:{ type: String },
  projectTwoTitle: { type: String },
  projectTwoText: { type: String },
  projectTwoUrl: { type: String },
  projectTwoImage:{ type: String },
  projectThreeTitle: { type: String },
  projectThreeText: { type: String },
  projectThreeUrl: { type: String },
  projectThreeImage:{ type: String },
  resumeUrl: { type: String },
  githubLink:{ type: String },
  linkdin:{ type: String },
  footer: { type: String },
  date: { type: Date, default: Date.now },
  // CustomPage {    }


});

module.exports = mongoose.model('profile', userSchema);

