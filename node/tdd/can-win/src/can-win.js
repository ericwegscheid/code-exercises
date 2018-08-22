'use strict'

const mod = {
	step: (arr, index) => {
		let value = arr[index];

		if( !mod.save[index] ) {
			mod.save[index] = true;

		} else {
			return false;
		}

		if( value === 0 ) {
			return true;
		}

		if( typeof value !== 'number' ) {
			return false;
		}

		return mod.step(arr, index + value) || mod.step(arr, index - value);
	},
	canWin: (arr, index) => {
		mod.save = {};

		if( arr.indexOf(0) < 0 ) {
			return false;
		}

		return mod.step(arr, index);
	}
};

module.exports = mod;
