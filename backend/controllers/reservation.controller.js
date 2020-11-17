Reservation = require('../models/reservation.model');

exports.add = function (req, res) {
  let reservation = new Reservation();

  reservation.user_id = req.body.user_id;
  reservation.name = req.body.name;
  reservation.datetime = req.body.datetime;
  reservation.doctor_id = req.body.doctor_id;

  reservation.save(function (err) {
    if (err)
      res.json(err);
    else {
      res.json({
        message: "New Reservation Added!",
        data: reservation,
      });
    }
  });
};
