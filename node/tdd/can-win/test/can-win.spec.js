const expect = require('chai').expect;
const canWin = require('../src/can-win').canWin;

describe('canWin', () => {
	it('should return false', () => {
		expect(canWin([2, 4, 1, 5], 0)).to.equal(false);
	});

	it('should return true', () => {
		expect(canWin([2, 4, 1, 0, 5], 0)).to.equal(true);
	});

	it('should return true if cycle in array exists', () => {
		expect(canWin([2, 0, 1, 1, 5], 0)).to.equal(true);
	});

	it('should return false', () => {
		expect(canWin([2, 4, 1, 5, 0], 0)).to.equal(false);
	});
});
