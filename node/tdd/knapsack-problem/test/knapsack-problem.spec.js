const expect = require('chai').expect;
const pack = require('../src/knapsack-problem').pack;

describe('pack knapsack', () => {
	it('should return the correct list of items to pack, the weight packed and the value', () => {
		expect(
			pack([[2, 1], [1, 2], [1, 3], [3, 5], [1, 4], [4, 10], [1, 3], [2, 4]], 9)
		).to.eql(
			'items: 1/4, 1/3, 1/3, 4/10, 2/4\n9 lbs. $24.00'
		);
	});
});
