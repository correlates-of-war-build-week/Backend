const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');

router.get('/', restricted, checkRole('Student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, checkRole('Student'), (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
  // update users
  const changes = req.body; // {name: 'Student'} 
  Users.update(req.params.id, req.body)
  .where({id: req.params.id})
  .update(changes)
  .then(count => {
    if(count > 0) {
      res.status(200).json({message: `${count} records updated`})
    } else {
      res.status(404).json({message: 'user not found'});
    }
  }).catch(error => {
    res.status(500).json(error);
  });
});

router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
  .where({id: req.params.id})
  .del()
  .then(count => {
    if(count > 0) {
      const unit = count > 1 ? 'records' : 'record';
      res.status(200).json({message: `${count} ${unit} deleted`})
    } else {
      res.status(404).json({message: 'user not found'});
    }
  }).catch(error => {
    res.status(500).json(error);
  });
});

module.exports = router;
