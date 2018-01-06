const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});


userSchema.pre('save', function(next) {
  const user = this;
  
  bcrypt.genSalt(10, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});


userSchema.methods.verifyPassword = function(inputPassword, cb) {
  return bcrypt.compare(inputPassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  })
}

module.exports = mongoose.model('User', userSchema);