var mongoose = require('mongoose');
var ChatModel = require('./schemas/chat');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mean-chat')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

exports.chat = ChatModel;
