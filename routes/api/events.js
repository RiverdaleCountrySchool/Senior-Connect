const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateEventInput = require("../../validation/event");
// Load User model
const Event = require("../../models/Event");
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/create", (req, res) => {
    console.log("creating event...")
  // Form validation
const { errors, isValid } = validateEventInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(404).json(errors);
  }
// User.findOne({ email: req.body.owner }).then(user => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
      
      const newEvent = new Event({
        name: req.body.name,
        owner: req.body.owner,
        createdDate: req.body.createdDate,
        activity: req.body.activity
      });
      newEvent
        .save()
        .then(event => res.json(event))
        .catch(err => console.log(err));
// // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
    // }
  // });
});


module.exports = router