var customMatchers = require('../index.js');

describe('toBeStatusCode', function(){	

	beforeAll(function(){
		jasmine.addMatchers(customMatchers);
	});

	it('Equals', function(){		
		expect(200).toBeStatusCode(200);
		expect(301).toBeStatusCode(301);
		expect(404).toBeStatusCode(404);
	});

	it('Not equals', function(){
		expect(200).not.toBeStatusCode(404);
		expect(200).not.toBeStatusCode(0);
		expect(200).not.toBeStatusCode(0);
	});

});