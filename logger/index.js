/*global */
config = require('../config');

module.exports =
  function() {
    var winston = require('winston');
    var moment = require('moment');
    var options = {
      filename: './logs/data-visualization.log',
      maxsize: 10000,
      maxFiles: 10,
      handleExceptions: true,
      json: false,
      timestamp: function() {
        return moment().format('YYYY/MM/DD HH:mm:ss');
      }
    };
    winston.add(winston.transports.File, options);
    if(config.log.level) {
        winston.level = config.log.level;
    }
    return winston;
  }();
