const User = require('../models/User');
const passport = require('passport');


module.exports.login =  [
  passport.authenticate('local'),
  (req, res) => res.send(true)
]


module.exports.register = (req, res, next) => {
  let {name, email, password} = req.body;

  User
    .findOne({email})
    .then(user => {
      if(user) {
        return res
          .status(401)
          .send({message: 'This email is already in use.'});
      } else {
        new User({name, email, password})
          .save()
          .then(newUser => res.send(true))
      }
    })
    .catch(err => {
      return res
        .status(401)
        .send({message: 'Registration failed.'})
    })
}


module.exports.logout = (req, res, next) => {
  req.logout();
  res.send(true);
}


module.exports.user = (req, res, next) => {
  res.send(req.user);
}