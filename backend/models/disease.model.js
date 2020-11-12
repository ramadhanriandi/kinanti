const mongoose = require('mongoose');

const diseaseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
});

const Disease = module.exports = mongoose.model('diseases', diseaseSchema);

module.exports.get = function (callback, limit) {
  Disease.find(callback).limit(limit); 
}