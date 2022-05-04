const router = require('express').Router();
const travelerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoute');

router.use('/traveller', travelerRoutes);
router.use('/location', locationRoutes);
router.use('/trip', tripRoutes);

module.exports = router;