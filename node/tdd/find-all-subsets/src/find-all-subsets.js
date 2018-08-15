'use strict'

const _ = require('lodash');

let mod = {
	getSubset: (arr, output, subset, i) => {
		if( i == arr.length ) {
			output.push(subset.join(''));

		} else {
			subset[i] = null;
			mod.getSubset(arr, output, subset, i + 1);

			subset[i] = arr[i];
			mod.getSubset(arr, output, subset, i + 1);
		}
	},
	getSubsets: (arr) => {
		let output = [];

		mod.getSubset(arr, output, Array(arr.length), 0);

		return output;
	}
};

module.exports = mod;
