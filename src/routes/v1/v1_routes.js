const express = require('express');
const { FlightMiddlewares } = require('../../middlewares/index');
const cityController = require('../../controllers/city-controllers');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controllers');
const  router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

// router.post('/flights', FlightController.create); //without middle ware
router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);    // with middleware request
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;