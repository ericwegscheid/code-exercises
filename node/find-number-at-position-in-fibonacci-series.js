#!/usr/bin/node

const pos = process.argv[2] || 3;
const arr = [0, 1];

const step = () => {
	let v = arr[pos];

	if( v ) {
		return v;
	}

	let lastIndex = arr.length -1;

	arr.push(arr[lastIndex - 1] + arr[lastIndex]);

	return step();
};

console.log(step());
