const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    navbar: { type: String, default: false },
    jumbotron: { type: String, default: false },
    carousel: { type: String, default: false },
    footer: { type: String, default: false },
    background: { type: String, default: false },
    background_color: { type: String, default: false },
    profile_pic: { type: String, default: false },
    github: { type: String, default: false },
    date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("User", profileSchema);

module.exports = Profile; 