const expect = require('chai').expect;
const getSubsets = require('../src/find-all-subsets').getSubsets;

describe('getSubsets', () => {
	it('should return the subsets [1, 2, 3, 4]', () => {
		expect(getSubsets([1, 2, 3, 4])).to.eql([
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

	it('should return the subsets for [1, 2, 3]', () => {
		expect(getSubsets([1, 2, 3])).to.eql([
			'',
			'3',
			'2',
			'23',
			'1',
			'13',
			'12',
			'123'
		]);
	});

	it('should return the subsets for [1, 2]', () => {
		expect(getSubsets([1, 2])).to.eql([
			'',
			'2',
			'1',
			'12'
		]);
	});
});
