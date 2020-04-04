var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([1,2,3,4]);
});

module.exports = router;
