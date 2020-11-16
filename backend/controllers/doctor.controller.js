Doctor = require('../models/doctor.model');

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
        message: "New doctor Added!",
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
