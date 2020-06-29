var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio.html');
});

module.exports = router;