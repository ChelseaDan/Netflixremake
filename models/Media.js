var mongoose = require('mongoose');

var mediaSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('media', mediaSchema);
