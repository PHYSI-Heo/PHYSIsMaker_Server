const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();

app.set('port', process.env.PORT || 80);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.use('/', require('./routes/page'));



app.listen(app.get('port'), function() {
	console.log(">Start Server..");
});

