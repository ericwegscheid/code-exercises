#!/usr/bin/node

// const arr = [3, 4, 1, 1, 2, 0]; // [ '0 to 1', '1 to 4', '4 to finish' ]
// const arr = [3, 1, 1, 4, 2, 0]; // [ '0 to 3', '3 to finish' ]
const arr = [0, 1, 3, 4, 0, 0]; // No hops lead to finish

const end = arr.length - 1;
const hops = [];

// returns index of largest value found between indexes in range
const getNextIndex = (range) => {
	let next = 0;
	let nextIndex;

	arr
		.slice(range[0], range[1] + 1)
		.forEach((v, i) => {
			if( v > next ) {
				next = v;
				nextIndex = range[0] + i;
			}
		});

	return nextIndex;
}

const step = (index) => {
	let value = arr[index];

	if( !value ) {
		return 'No hops lead to finish';
	}

	let range = [index + 1, index + value];

	if( range[1] > end ) {
		hops.push(`${index} to finish`);

		return hops;
	}

	let nextIndex = getNextIndex(range);

	hops.push(`${index} to ${nextIndex}`);

	return step(nextIndex);
};

console.log(step(0));
