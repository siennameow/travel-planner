const router = require('express').Router();
const { Traveler, Location } = require('../../model/index');

router.get('/', (req, res) => {
    Traveler.findAll({
        include: [{ model: Location }],
    }).then(travelerAll => {
        res.json(travelerAll)
        console.log('Found Travelers')
    }).catch(error => res.send(error).status(500));
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});



module.exports = router;