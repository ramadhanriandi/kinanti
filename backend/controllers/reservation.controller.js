Doctor = require('../models/doctor.model');
Reservation = require('../models/reservation.model');

exports.add = function (req, res) {
  let reservation = new Reservation();

  Doctor.find({ name: req.body.doctor_name }, function (doctorErr, doctor) {
    if (doctorErr)
      res.json({
        status: "error",
        message: doctorErr,
      });
    
    let requestedDate = new Date(req.body.date);
    
    reservation.user_id = req.body.user_id;
    reservation.name = req.body.name;
    reservation.datetime = `${requestedDate.getFullYear()}-${requestedDate.getMonth() + 1}-${requestedDate.getDate()}T${req.body.time}:00.000Z`;
    reservation.doctor_id = doctor[0]._id;

    reservation.save(function (reservationErr) {
      if (reservationErr)
        res.json(reservationErr);
      else {
        res.json({
          message: "New Reservation Added!",
          data: reservation,
        });
      }
    });
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
