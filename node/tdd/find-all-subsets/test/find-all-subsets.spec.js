const expect = require('chai').expect;
const getSubsets = require('../src/find-all-subsets').getSubsets;

describe('getSubsets', () => {
	var arr = [1, 2, 3, 4];

	it('should return the subsets', () => {
		expect(getSubsets(arr)).to.deep.eql([
			'',
			'4',
			'3',
			'34',
			'2',
			'24',
			'23',
			'234',
			'1',
			'14',
			'13',
			'134',
			'12',
			'124',
			'123',
			'1234'
		]);
	});
});
