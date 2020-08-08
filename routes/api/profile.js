const express = require('express');
const router = express.Router();
// const config = require('config');
//importing module
// const Profile = require("../../models/Profile.js")





// @route    post api/profile
// @desc     Register user  
// @access   Public

router.post("/",

async (req,res)=> {
  console.log(req.body);

//object destructing
const {email,firstName,lastName,navColor, navText,backgroundColor,bio,githubLink,linkdin,footer}=req.body;
try{

//and create instance of new user
profile = new Profile ({
  emai: email,
  firstName:firstName,
  lastName: lastName,
  navColor: navColor,  
  navText: navText,
  backgroundColor: backgroundColor,
  bio: bio,
  githubLink:githubLink,
  linkdin:linkdin,
  footer: footer
   
  });
await profile.save();
res.json(profile);

}catch(err){
    console.error(err);
    res.status(500).send('Server error');
}
}
);
module.exports = router;
