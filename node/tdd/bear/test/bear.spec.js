const expect = require('chai').expect;
const Bear = require('../src/bear');

describe('bear.speak', () => {
	var bear = new Bear({
			name: 'Teddy',
			eats: 'honey'
		}),
		speech = [
			'Ahh, Hello!',
			'My name is Teddy',
			'honey',
			'I don\'t know what you are talking about'
		];

	it(`should say "${speech[0]}"`, () => {
		let output = bear.speak();

		expect(output).to.eql(speech[0]);
	});

	it(`should say "${speech[1]}"`, () => {
		let output = bear.ask('What is your name?');

		expect(output).to.eql(speech[1]);
	});

	it(`should say "${speech[2]}"`, () => {
		let output = bear.ask('What is your favorite food?');

		expect(output).to.eql(speech[2]);
	});

	it(`should say "${speech[3]}"`, () => {
		let output = bear.ask('How old are you?');

		expect(output).to.eql(speech[3]);
	});
});
