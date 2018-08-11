const expect = require('chai').expect;
const flip = require('../src/flipper');

describe('flip', () => {
	let data = [
			['AB@#CD!E', 'ED@#CB!A'],
			['AAABBB@#AA!A', 'AAABBB@#AA!A'],
			['ZSX!*RTH*H#JL', 'LJH!*HTR*X#SZ']
		];

	for( test of data ) {
		it(`should output ${test[1]}`, () => {
			let output = flip(test[0]);

			expect(output).to.eql(test[1]);
		});
	}
});
