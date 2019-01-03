
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movie = require('./movies.js');
let bcrypt = require('bcrypt');

let UserSchema = new Schema({
  user: {
    type: String,
    required: true,
    index: {
      unique: true,
      dropDups: true
    }
  },

  email: {
    type: String,
    required: true,
    match: /\S+@\S+\.\S+/,
    index: {
      unique: true,
      dropDups: true
    }
  },

  password: {
      type: String,
      required: true
    }
})

UserSchema.statics.authenticate = (email, password, cb) => {
  User.findOne({email: email})
    .exec((err, user) => {
      if(err){
        return cb(err);
      } else if(!user){
        let error = new Error('There seems to be no record for this user');
          error.status = 401;
          return cb(error);
      }
      bcrypt.compare(password, user.password, (err, data) => {
        if(data === true) {
          return cb(null, user);
        } else {
          return cb()
        }
      })
    })
}

UserSchema.pre('save', function(next){
  let user = this;

  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next(err)
    }
    user.password = hash;
    next();
  })
})

let User = mongoose.model('User', UserSchema)

module.exports = User
