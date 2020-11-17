const router = require('express').Router();

const diseaseController = require('../controllers/disease.controller');
const doctorController = require('../controllers/doctor.controller');
const reservationController = require('../controllers/reservation.controller');

router.get('/', function(req, res) {
  res.json({
    status: 'API Works',
    message: 'Welcome to Backend',
  });
});

router.route('/diseases')
  .get(diseaseController.index)
  .post(diseaseController.add);

router.route('/diseases/search')
  .post(diseaseController.search)

router.route('/diseases/:disease_id')
  .get(diseaseController.view)
  .patch(diseaseController.update)
  .put(diseaseController.update)
  .delete(diseaseController.delete);

router.route('/doctors')
  .get(doctorController.index)
  .post(doctorController.add);

router.route('/doctors/:doctor_id')
  .get(doctorController.view)
  .patch(doctorController.update)
  .put(doctorController.update)
  .delete(doctorController.delete);

router.route('/reservations')
  .post(reservationController.add)
  .get(reservationController.find);

module.exports = router;