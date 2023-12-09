const {Schema, model} = require('mongoose');

const schema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  userDescription: {
    type: String,
  },
  userAvatar: {
    type: String,
  },
  userPass: {
    type: String,
    require: true
  },
});

module.exports = model('user', schema);