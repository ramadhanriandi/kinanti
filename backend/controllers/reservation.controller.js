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

exports.find = function (req, res) {
  if (req.query.user_id) {
    Reservation.find({ user_id: req.query.user_id }, function (err, reservation) {
      if (err)
        res.json({
          status: "error",
          message: err,
        });

      res.json({
        status: "success",
        message: "Search reservations result",
        data: reservation,
      });
    });
  } else if (req.query.date) {
    let tomorrow = new Date(req.query.date);
    tomorrow.setDate(tomorrow.getDate() + 1);

    Reservation.find(
      { 
        datetime: {
          $gte: new Date(req.query.date),
          $lt: tomorrow, 
        }
      },
      function (err, reservation) {
        if (err)
          res.json({
            status: "error",
            message: err,
          });

        res.json({
          status: "success",
          message: "Search reservations result",
          data: reservation,
        });
      }
    );
  }
};
