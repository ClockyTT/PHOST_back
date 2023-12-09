const {Schema, model} = require('mongoose');

const schema = new Schema({
  postDate: {
    type: Date,
    default: new Date(Date.now()),
  },
  postId: {
    type: String,
    require: true,
  },
  postDescription: {
    type: String,
  },
  postImage: {
    type: String,
    require: true,
  },
  postCreator: {
    type: String,
    require: true,
  },
  postTags: {
    type:[String],
  },
  postLikes: {
    type:[String],
    default: [],
  }
});

module.exports = model('post', schema);