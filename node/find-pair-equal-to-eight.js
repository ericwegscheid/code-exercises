#!/usr/bin/node

// var arr = [4, 2, 1, 4]; // result: [ 4, 4 ]
// var arr = [1, 9, 3, 2]; // result: 'No pair equal to 8'

var a = 0,
	b = arr.length - 1,
	step = function() {
		var sum;

		if( a === b ) {
			return 'No pair equal to 8';
		}

		sum = arr[a] + arr[b];

		if( sum < 8 ) {
			a++;

		} else if( sum > 8 ) {
			b--;

		} else {
			return [arr[a], arr[b]];
		}

		return step();
	};

arr.sort();

console.log(step());
