var should = require('chai').should();
var validator = require('../json-validation')

describe('', function () {
  it('Json Validation tests', function (done) {
    var response = validator.isValid('');
    var isValid = response.isValid;
    var errorsSize = response.errors.length
    isValid.should.equal(false);
    errorsSize.should.equal(1);

    var correctData = '{ "expenses" : [' +
    		'{ "type":"type1" , "value":2, "date":"12/04/2015" }' +
            ']}';
    response = validator.isValid(correctData);
    isValid = response.isValid;
    errorsSize = response.errors.length
    isValid.should.equal(true);
    errorsSize.should.equal(0);

    var dataWithMissingPropValue = '{ "expenses" : [' +
            '{ "type":"type1" , "date":"12/04/2015" }' +
            ']}';
    response = validator.isValid(dataWithMissingPropValue);
    isValid = response.isValid;
    errorsSize = response.errors.length
    isValid.should.equal(false);
    errorsSize.should.equal(1);

    var invalidJson = '{ "expenses" : [' +
            '{ "type":"type1"  "value":2 "date":"12/04/2015" }' +
            ']}';
    response = validator.isValid(invalidJson);
    isValid = response.isValid;
    errorsSize = response.errors.length
    isValid.should.equal(false);
    errorsSize.should.equal(1);

    var invalidJsonMissingDelimiter = '{ "expenses" : [' +
            '{ "type":"type1",  "value":2, "date":"12/04/2015" }' +
            '}';
    response = validator.isValid(invalidJsonMissingDelimiter);
    isValid = response.isValid;
    errorsSize = response.errors.length
    isValid.should.equal(false);
    errorsSize.should.equal(1);

    var invalidJsonInvalidDate = '{ "expenses" : [' +
            '{ "type":"type1", "value":2, "date":"12/04/2015z" }' +
            ']}';
    response = validator.isValid(invalidJsonMissingDelimiter);
    isValid = response.isValid;
    errorsSize = response.errors.length
    isValid.should.equal(false);
    errorsSize.should.equal(1);

    var invalidJsonInvalidValue = '{ "expenses" : [' +
            '{ "type":"type1", "value":"2", "date":"12/04/2015z" }' +
            ']}';
    response = validator.isValid(invalidJsonMissingDelimiter);
    isValid = response.isValid;
    errorsSize = response.errors.length

    isValid.should.equal(false);
    errorsSize.should.equal(1);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});
