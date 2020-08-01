const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
//importing module
const User = require("../../models/Users")
const { check, validationResult } = require('express-validator');
//i wrote for testing purpose for post man
// // @route    get api/users
// // @desc     Register user
// // @access   Public

// router.get("/",(req,res)=> res.send("user route"));
// module.exports = router;

// @route    post api/users
// @desc     Register user
// @access   Public

router.post("/",
[
    check('first_name', 'Name is required').not().isEmpty(),
    check('last_name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })

],
async (req,res)=> {
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
//object destructing
const {first_name, last_name, email, password,avatar,payment,github,linked,published_portfolio,credit_card}=req.body;
try{
//see if user exists
let user = await User.findOne({ email });

if (user) {
  return res
    .status(400)
    .json({ errors: [{ msg: 'User already exists' }] });
}
//get users garvatar
const avatar = gravatar.url(email,{
    s: '200',
    r: 'pg',
    d: 'mm'
})
//and create instance of new user
user = new User({
    first_name,
    last_name,
    email,
    avatar,
    password,
    credit_card,
    payment,
    linked,
    github,
    published_portfolio


  });



//**** */ encrypt password
//(salting the bcrypt more the value more secure)
const salt = await bcrypt.genSalt(10);
//hasing the password
user.password = await bcrypt.hash(password, salt);
//and save the user
await user.save();


// return jsonwebtoken
const payload = {
    user: {
      id: user.id
    }
  };
  jwt.sign(
    payload,
    config.get('jwtSecret'),
    { expiresIn: '5 days' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );


 

}catch(err){
    console.error(err);
    res.status(500).send('Server error');

}




  


}
);
module.exports = router;
