/*global global*/
//Load dependencies
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');

app.use(cors());

//Config file
config = require('./config');

//Load logger
var logger = require('./logger');

app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('index.jade', {
      title: 'Data visualization'
    });
});

app.post('/parseData', function isReal(req, res, next){
    logger.info('Draw graph');
    res.json({});
});

app.listen(config.port, function(){
    logger.info('Data visualization Web app start at  ', config.port);
});
