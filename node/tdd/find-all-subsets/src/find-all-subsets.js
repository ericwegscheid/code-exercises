'use strict'

let mod = {
	getSubset: (arr, output, subset, i) => {
		// 
		if( i == arr.length ) {
			output.push(subset.join(''));

		// build subset recursively
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
