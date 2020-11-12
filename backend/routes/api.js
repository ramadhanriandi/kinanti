const router = require('express').Router();

const diseaseController = require('../controllers/disease.controller');

router.get('/', function(req, res) {
  res.json({
    status: 'API Works',
    message: 'Welcome to Backend',
  });
});

router.route('/diseases')
  .get(diseaseController.index)
  .post(diseaseController.add);

router.route('/diseases/:disease_id')
  .get(diseaseController.view)
  .patch(diseaseController.update)
  .put(diseaseController.update)
  .delete(diseaseController.delete);

module.exports = router;