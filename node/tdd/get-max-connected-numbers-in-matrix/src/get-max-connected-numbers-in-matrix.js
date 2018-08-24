'use strict'

// let matrix = [[1, 1, 2], [1, 3, 3], [3, 2, 3], [2, 3, 3]];

const _ = require('lodash');

const mod = {
	getConnections: (node, matrix) => {
		let x = node.pos[0];
		let y = node.pos[1];

		return _.filter(
			_.map(
				[
					[x, y - 1], // top
					[x + 1, y], // right
					[x, y + 1], // bottom
					[x - 1, y] // left
				],
				(n) => { 
					return {
						value: (matrix[n[0]] || [])[n[1]],
						pos: n
					};
				}
			),
			(n) => n.value
		);
	},
	step: (node, matrix) => {
		let connections = mod.getConnections(node, matrix);

		mod._save[]

		_.each(connections, (c) => {
			mod._saved[]


		});


		debugger;


	},
	get: (matrix) => {
		mod._saved = {};

		let node = {
			value: matrix[0][0],
			pos: [0, 0]
		};

		console.log(mod.step(node, matrix));

		return '3 with 5 connections'
	}
};

module.exports = mod;
