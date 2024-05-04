const express = require('express');
const router = express.Router();
const converterController = require('../controllers/converter-controller');

router.post('/fahrenheit-celsius', converterController.convertFahrenheitsToCelsius);
router.post('/celsius-fahrenheit', converterController.convertCelciusToFahrenheits);

module.exports = router;