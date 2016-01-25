var Validator = require('jsonschema').Validator;
var v = new Validator();

var logger = require('../logger');

var moment = require('moment');

//Config file
config = require('../config');

var sampleJson = '{ "expenses" : [' +
		'{ "type":"type1" , "value":2, "date":"12/04/2015" },' +
		'{ "type":"type2" , "value":3, "date":"12/04/2015" },' +
		'{ "type":"type3" , "value":6, "date":"12/04/2015" } ]}';

/**
return  sample.
*/
function getSampleJson() {
	return sampleJson;
}

/**
Check if the json is valid.
*/
function isValid(jsonToParse) {
	var response = {
		isValid: true,
		errors: []
	}
	if(jsonToParse) {
		try {
			var expenses = JSON.parse(jsonToParse).expenses;
		} catch(err) {
			response.isValid = false;
			response.errors.push("Invalid Json Data");
			return response;
		}
		
		logger.info("expenses ", expenses);

		for(var i=0; i < expenses.length; i++) {
			var date = new Date(expenses[i].date);
			if(true === isNaN(date)) {
				//continue let the jsonschema library handle the error.
			} else {
				expenses[i].date = date;
			}
			var errors = v.validate(expenses[i], config.expenseSchema).errors;
			if(0 < errors.length) {
				response.isValid = false;
				for(var j = 0; j < errors.length; j++) {
					response.errors.push("line " + (i+1) + " : " + errors[j]);
				}

			}
		}
	} else {
		response.isValid = false;
		response.errors.push("Invalid Json Data");
	}
	return response;
}

/**
sort expenses by date.
*/
function getSortedExpenses(jsonData) {
	var expenses = JSON.parse(jsonData).expenses;
	for(var i=0; i < expenses.length; i++) {
		var date = new Date(expenses[i].date);
		expenses[i].date = moment(date).format('DD MMM YYYY');
	}
	expenses.sort(function(a, b){
		return a.date-b.date //sort by date ascending
	});
	return expenses;
}

module.exports = {
	getSampleJson: getSampleJson,
	isValid: isValid,
	getSortedExpenses: getSortedExpenses
}