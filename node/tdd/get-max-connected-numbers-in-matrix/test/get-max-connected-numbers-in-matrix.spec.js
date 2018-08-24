const expect = require('chai').expect;
const getMaxConnectedNumbersInMatrix = require('../src/get-max-connected-numbers-in-matrix');

describe('getMaxConnectedNumbersInMatrix.get', () => {
	it('should return "3 with 5 connections"', () => {
		let matrix = [[1, 1, 2], [1, 3, 3], [3, 2, 3], [2, 3, 3]];

		expect(getMaxConnectedNumbersInMatrix.get(matrix)).to.equal('3 with 5 connections');
	});
});
