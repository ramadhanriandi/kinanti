const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schedules: [{
    type: String,
    required: true,
  }],
});

const Doctor = module.exports = mongoose.model('doctors', doctorSchema);

module.exports.get = function (callback, limit) {
  Doctor.find(callback).limit(limit); 
}