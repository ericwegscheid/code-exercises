#!/usr/bin/node


// @TODO: not quite right yet, we should output just the repeating values

var arr = [3, 1, 3, 2, 2];
var cycle = [];
var step = (i) => {
	var v = arr[i];

	cycle.push(i);

	if( cycle.indexOf(v) >= 0 ) {
		return cycle;
	}

	return step(v);
};

console.log('The cycle is: ', step(0));
