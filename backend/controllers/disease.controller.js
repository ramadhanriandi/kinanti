Disease = require('../models/disease.model');

exports.index = function (req, res) {
  Disease.get(function (err, disease) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Diseases Fetched",
      data: disease,
    });
  });
};

exports.add = function (req, res) {
  let disease = new Disease();

  disease.name = req.body.name;
  disease.description = req.body.description;
  disease.treatment = req.body.treatment;

  disease.save(function (err) {
    if (err)
      res.json(err);

    res.json({
      message: "New disease Added!",
      data: disease,
    });
  });
};

exports.view = function (req, res) {
  Disease.findById(req.params.disease_id, function (err, disease) {
    if (err)
      res.send(err);

    res.json({
      message: 'Disease Details',
      data: disease,
    });
  });
};

exports.update = function (req, res) {
  Disease.findById(req.params.disease_id, function (err, disease) {
    if (err)
      res.send(err);

    disease.name = req.body.name || disease.name;
    disease.description = req.body.description || disease.description;
    disease.treatment = req.body.treatment || disease.treatment;
    
    disease.save(function (err) {
      if (err)
        res.json(err);

      res.json({
        message: "Disease Updated Successfully",
        data: disease,
      });
    });
  });
};

exports.delete = function (req, res) {
  Disease.deleteOne({
    _id: req.params.disease_id,
  }, function (err, contact) {
    if (err)
      res.send(err);

    res.json({
      status: "success",
      message: 'Disease Deleted',
    })
  })
}