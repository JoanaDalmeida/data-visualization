/*global global*/
//Load dependencies
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

validator = require('./json-validation');


app.use(cors());

//Config file
config = require('./config');

//Load logger
var logger = require('./logger');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('index.jade', {
      title: 'Data visualization',
      jsonValidationErrors: null
    });
});

app.post('/parseData', function parseData(req, res, next){
    logger.info('JsonData ', req.body);
	var data = req.body.data;
	var response = validator.isValid(data);
	logger.info('response ', response);
	if(true === response.isValid) {	
    	res.render('results.jade', {
	      title: 'Data visualization',
	      expenses: JSON.parse(data).expenses
	    });
	} else {
		res.render('index.jade', {
	      title: 'Data visualization',
	      jsonValidationErrors: response.errors
	    });
	}
});

app.listen(config.port, function(){
    logger.info('Data visualization Web app start at  ', config.port);
});
