Datetime = require('../utils/datetime');
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
    reservation.datetime = `${requestedDate.getFullYear()}-${requestedDate.getMonth() + 1 < 10 ? '0' : ''}${requestedDate.getMonth() + 1}-${requestedDate.getDate() < 10 ? '0' : ''}${requestedDate.getDate()}T${req.body.time}:00.000Z`;
    reservation.doctor_id = doctor[0]._id;

    reservation.save(function (reservationErr) {
      if (reservationErr)
        res.json({
          status: "error",
          message: "Reservasi gagal dilakukan",
        });

      else {
        res.json({
          status: "success",
          message: "Reservasi berhasil dilakukan",
          data: reservation,
        });
      }
    });
  });
};

exports.find = function (req, res) {
  if (req.query.user_id) {
    Doctor.get(function (doctorErr, doctor) {
      if (doctorErr)
        res.json({
          status: "error",
          message: doctorErr,
        });

      Reservation.find({ user_id: req.query.user_id }, function (reservationErr, reservation) {
        if (reservationErr)
          res.json({
            status: "error",
            message: reservationErr,
          });

        let data = "List Semua Reservasi:\n";

        for (i = 0; i < reservation.length; i++) {
          let reservationDateTime = new Date(reservation[i].datetime);
          data += `\n[${i + 1}]\n`;
          data += `Tanggal: ${reservationDateTime.getDate()} ${Datetime.getMonthName(reservationDateTime.getMonth())} ${reservationDateTime.getFullYear()}\n`;
          data += `Jam: ${reservationDateTime.getHours()}:${reservationDateTime.getMinutes() < 10 ? '0' : ''}${reservationDateTime.getMinutes()}\n`;

          for (j = 0; j < doctor.length; j++) {
            if (JSON.stringify(reservation[i].doctor_id) === JSON.stringify(doctor[j]._id)) {
              data += `Dokter: ${doctor[j].name}\n`;
              data += `Alamat: ${doctor[j].address}\n`;
            }
          }
        }

        res.json({
          status: "success",
          message: "Search reservations result",
          data: data,
        });
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
