var STATUS_CODES = require('./statusCodes.js');

module.exports = {
    toBeStatusCode: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var result = {};
                result.pass = util.equals(actual, expected, customEqualityTesters);

                var expectedStatus = '';
                var actualStatus = '';

                if(parseInt(expected) === expected && STATUS_CODES.hasOwnProperty(expected)) {
                    expectedStatus = ' (' + STATUS_CODES[expected] + ')';
                }

                if(parseInt(actual) === actual && STATUS_CODES.hasOwnProperty(actual)) {
                    actualStatus = ' (' + STATUS_CODES[actual] + ')';
                }

                if(result.pass) {
                    result.message = 'Expected ' + expected + expectedStatus + ' not to be ' + actual + actualStatus;
                } else {
                    result.message = 'Expected ' + expected + expectedStatus + ' to be ' + actual + actualStatus;
                }

                return result;

            }
        };
    }
};
