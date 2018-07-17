#!/usr/bin/node

var arr = [3, 2, 3, 1, 2]; // result: [ 3, 1, 2 ]
// var arr = [3, 2, 4, 2, 1]; // result: [ 2, 4, 1 ]
// var arr = [3, 2, 4, 5, 1]; // result: No cycle found
// var arr = [1, 2, 3, 4, 5]; // result: No cycle found

var cycle = [];
var step = (i) => {
	var match = cycle.indexOf(i),
		v = arr[i];

	if( !v ) {
		return 'No cycle found';
	}

	if( match >= 0 ) {
		return cycle.slice(match);
	}

	cycle.push(i);

	return step(v);
};

console.log(step(0));
