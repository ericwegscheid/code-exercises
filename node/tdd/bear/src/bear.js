'use strict'

class Bear {
	constructor(params = {}) {
		params = Object.assign({
			name: 'Yogi',
			eats: 'Berries'
		}, params);

		this._name = params.name;
		this._eats = params.eats;

		this._questions = {
			'what is your name': `My name is ${this._name}`,
			'what is your favorite food': this._eats
		};
	}

	speak() {
		return 'Ahh, Hello!';
	}

	ask(question) {
		question = question.toLowerCase().replace('?', '');

		return this._questions[question] || 'I don\'t know what you are talking about';
	}
}

module.exports = Bear;
