var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
