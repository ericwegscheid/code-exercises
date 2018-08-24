#!/usr/bin/node

const input = process.argv[2] || 78;

const arr = [1, 5, 7, 14, 18, 23, 27, 28, 33, 34, 35, 40, 49, 51, 52, 56, 60, 70, 77, 78, 79, 80, 81, 89, 90, 91, 92, 100];

const step = (min, max, prev) => {
	let index = Math.floor((max - min) / 2) + min;

	if( index === prev ) {
		return -1;
	}

	let value = arr[index];

	if( input > value ) {
		return step(index, max, index);

	} else if( input < value ) {
		return step(min, index, index);

	} else {
		return index;
	}
}

let index = step(0, arr.length);

console.log(index >= 0 ? `found ${input} at index ${index}` : `${input} does not exist in this array: \n${arr}`);
