var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/recipe/', function(req, res, next) {
  res.send('process the request here');
});

module.exports = router;
