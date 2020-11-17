const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctors',
    required: true,
  },
});

const Reservation = module.exports = mongoose.model('reservations', reservationSchema);

module.exports.get = function (callback, limit) {
  Reservation.find(callback).limit(limit); 
}