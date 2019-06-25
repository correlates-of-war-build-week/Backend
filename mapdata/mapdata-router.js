const router = require('express').Router();

const MapData = require('./mapdata-model');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');

router.get('/', restricted, checkRole('Student'), (req, res) => {
    MapData.find()
    .then(mapdata => {
      res.json(mapdata);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, checkRole('Student'), (req, res) => {
    MapData.findById(req.params.id)
    .then(mapdata => {
      res.json(mapdata);
    })
    .catch(err => res.send(err));
});

module.exports = router;