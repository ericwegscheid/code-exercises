'use strict';

const assert = require('assert');
const _ = require('lodash');


// Implement the parseRange function which takes a comma separated
// series of single years, or year ranges and returns an array of finite years
// which correspond to the given input.
// Constraints:
// Valid years are 1999 to current year
// Years must not repeat
// Sorted


function isRange(v) {
	return v.match(/\d\d\d\d\-\d\d\d\d/);
}

function isValidYear(v) {
	return v <= 2018 && v >= 1999;
}

function breakApartRange(range) {
	let output = [];
	let arrSplit = range.split('-');
	let start = Number(arrSplit[0]);
	let end = Number(arrSplit[1]);

	if( start < end ) {
		let diff = end - start;

		_.times(diff, () => {
			output.push(start++);
		});

		output.push(end);

	} else if( start === end ) {
		output.push(start);
	}

	return output;
}

function parseRange(rangeStr) {
	let arr = rangeStr.split(',');
	let output = [];
	let used = {};

	_.each(arr, (v) => {
		v = v.trim().replace(/\s/g, '');

		if( used[v] ) {
			return;
		}

		used[v] = true;

		if( !v ) {
			return;
		}

		if( isRange(v) ) {
			output = output.concat(breakApartRange(v));

		} else if( isValidYear(v)) {
			output.push(Number(v));
		}
	});

	return output.sort();
}

assert.deepStrictEqual(parseRange('1999, 2002-2005, 2007'), [1999, 2002, 2003, 2004, 2005, 2007]);
assert.deepStrictEqual(parseRange('2002-2005, 2002-2005, 2002 - 2005'), [2002, 2003, 2004, 2005]);
assert.deepStrictEqual(parseRange('2017'), [2017]);
assert.deepStrictEqual(parseRange('2017 - 2015'), []);
assert.deepStrictEqual(parseRange('2015 - 2015'), [2015]);
assert.deepStrictEqual(parseRange('1999 , 2000, , 2008'), [1999, 2000, 2008]);
assert.deepStrictEqual(parseRange('2015, 2014, 2010'), [2010, 2014, 2015]);
assert.deepStrictEqual(parseRange('1999, 3000'), [1999]);
assert.deepStrictEqual(parseRange('1998, 2020'), []);

console.log('done :)');
