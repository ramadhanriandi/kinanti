Doctor = require('../models/doctor.model');
Reservation = require('../models/reservation.model');

exports.index = function (req, res) {
  Doctor.get(function (err, doctor) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Doctors Fetched",
      data: doctor,
    });
  });
};

exports.add = function (req, res) {
  let doctor = new Doctor();

  doctor.name = req.body.name;
  doctor.description = req.body.description;
  doctor.address = req.body.address;
  doctor.schedules = req.body.schedules;

  doctor.save(function (err) {
    if (err)
      res.json(err);
    else {
      res.json({
        message: "New Doctor Added!",
        data: doctor,
      });
    }
  });
};

exports.view = function (req, res) {
  Doctor.findById(req.params.doctor_id, function (err, doctor) {
    if (err)
      res.send(err);

    res.json({
      message: 'Doctor Details',
      data: doctor,
    });
  });
};

exports.update = function (req, res) {
  Doctor.findById(req.params.doctor_id, function (err, doctor) {
    if (err)
      res.send(err);

    doctor.name = req.body.name || doctor.name;
    doctor.description = req.body.description || doctor.description;
    doctor.address = req.body.address || doctor.address;
    doctor.schedules = req.body.schedules || doctor.schedules;
    
    doctor.save(function (err) {
      if (err)
        res.json(err);

      res.json({
        message: "Doctor Updated Successfully",
        data: doctor,
      });
    });
  });
};

exports.delete = function (req, res) {
  Doctor.deleteOne({
    _id: req.params.doctor_id,
  }, function (err, contact) {
    if (err)
      res.send(err);

    res.json({
      status: "success",
      message: 'Doctor Deleted',
    })
  })
}

exports.getAvailable = function (req, res) {
  Doctor.get(function (doctorErr, doctor) {
    if (doctorErr)
      res.json({
        status: "error",
        message: doctorErr,
      });

    let tomorrow = new Date(req.query.date);
    tomorrow.setDate(tomorrow.getDate() + 1);

    Reservation.find(
      { 
        datetime: {
          $gte: new Date(req.query.date),
          $lt: tomorrow, 
        }
      },
      function (reservationErr, reservation) {
        if (reservationErr)
          res.json({
            status: "error",
            message: reservationErr,
          });

        for (i = 0; i < doctor.length; i++) {
          const tempSchedules = new Set(doctor[i].schedules);

          for (j = 0; j < reservation.length; j++) {
            if (JSON.stringify(doctor[i]._id) === JSON.stringify(reservation[j].doctor_id)) {
              const tempDate = new Date(reservation[j].datetime);
              const tempSchedule = `${tempDate.getUTCHours()}:${tempDate.getUTCMinutes() < 10 ? '0' : ''}${tempDate.getUTCMinutes()}`;

              for (k = 0; k < doctor[i].schedules.length; k++) {
                if (JSON.stringify(doctor[i].schedules[k]).slice(1, -1) === tempSchedule) {
                  tempSchedules.delete(doctor[i].schedules[k]);
                }
              }
            }
          }
          
          doctor[i].schedules = [...tempSchedules]; 
        }

        res.json({
          status: "success",
          message: "Available Doctor Schedules",
          data: doctor,
        });
      }
    );
  });
};
