var express = require('express');
var router = express.Router();

router.get('/portfolio', function(req, res) {
  res.json('some response');//TODO
});

router.delete('/portfolio/:instrument', function(req, res) {
  const instrument = req.params['instrument'];
  res.json(instrument);//TODO
});

router.post('/portfolio', function(req, res) {
  res.json('some response');//TODO
});

router.get('/instruments', function(req, res) {
  res.json('some response');//TODO
});

module.exports = router;
