var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render('index.html');
});

router.get('/portfolio', function(req, res, next) {
	res.render('portfolio.html');
});

router.get('/modules', function(req, res, next) {
	res.render('module.html');
});

router.get('/contact', function(req, res, next) {
	res.render('contact.html');
});

router.get('/mqtt', function(req, res, next) {
	res.render('mqttclient.html');
});

router.get('/download', function(req, res, next) {
	res.render('download.html');
});


router.get('/portfolio/detail/:name', function(req, res, next) {
	var name = req.params.name;
	console.log(name);
	res.render('content/' + name + '.html');
});

module.exports = router;