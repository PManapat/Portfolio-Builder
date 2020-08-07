const express = require('express');
const router = express.Router();
const config = require('config');

const auth = require('../../middleware/auth');
//importing module
const Profile = require("../../models/Profile.js")
const User = require("../../models/Users.js")
router.get("/me",(req,res)=> res.send("i am hit"));

// router.get('/me', async (req, res) => {
  // res.send("i m hit")
//   try {
//     const profile = await Profile.findOne({
//       user: req.user.id
//     }).populate('user', ['firstName', 'avatar']);

//     if (!profile) {
//       return res.status(400).json({ msg: 'There is no profile for this user' });
//     }

//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });



// @route    post api/profile
// @desc     Register user  
// @access   Private

// router.post("/", 

// async (req,res)=> {
//   console.log(req.body);

// //object destructing
// const {email,firstName,lastName,navColor, navText,backgroundColor,bio,githubLink,linkdin,footer}=req.body;
// const profileFields = {
//   user: req.user.id,
//   emai: email,
//   firstName:firstName,
//   lastName: lastName,
//   navColor: navColor,  
//   navText: navText,
//   backgroundColor: backgroundColor,
//   bio: bio,
//   githubLink:githubLink,
//   linkdin:linkdin,
//   footer: footer
   
//   };
// try{

// //and create instance of new user
// let profile = await Profile.findOneAndUpdate(
//   { user: req.user.id },
//   { $set: profileFields },
//   { new: true, upsert: true }
// );
// res.json(profile);

// }catch(err){
//     console.error(err);
//     res.status(500).send('Server error');
// }
// }
// );
module.exports = router;
