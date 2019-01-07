
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users.js');

let MovieSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  title: {
    type: String,
    required: true
  }
})

let Movies = mongoose.model('Movies', MovieSchema);

module.exports = Movies;
