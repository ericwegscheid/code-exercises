'use strict'

// const matrix = [[1, 1, 3, 2], [1, 3, 2, 3], [2, 3, 3, 3]];

const _ = require('lodash');

const mod = {
	getConnections: (node, matrix) => {
		let [x, y] = [node.pos[0], node.pos[1]];

		return _.filter(
			_.map(
				[
					[x, y - 1], // top
					[x + 1, y], // right
					[x, y + 1], // bottom
					[x - 1, y]  // left
				],
				(n) => { 
					return {
						value: (matrix[n[0]] || [])[n[1]],
						pos: n
					};
				}
			),
			(n) => n.value === node.value && !mod._saved[n.pos.join('')]
		);
	},
	trackConnections: (node, matrix) => {
		let connectedNodes = mod.getConnections(node, matrix);

		mod._saved[node.pos.join('')] = true;

		// perhaps this does not need to be an object with a dynamic key
		mod._set[node.value] = mod._set[node.value] ? ++mod._set[node.value] : 1;

		_.each(connectedNodes, (n) => {
			if( !mod._saved[n.pos.join('')] ) {
				mod.trackConnections(n, matrix);
			}
		});
	},
	get: (matrix) => {
		mod._saved = {};

		// @TODO: just use an array here or two variables like currentValue and numberOf?
		mod._set = {};
		mod._largestSet = {};

		_.each(matrix, (row, i) => {
			_.each(row, (v, j) => {
				let node = {
					value: v,
					pos: [i, j]
				};

				debugger;

				if( !mod._saved[node.pos.join('')] ) {
					mod.trackConnections(node, matrix);
				}

				mod._largestSet







				debugger;
			});
		});

		debugger;

		return '3 with 5 connections'
	}
};

module.exports = mod;
