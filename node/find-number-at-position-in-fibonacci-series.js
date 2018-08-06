#!/usr/bin/node

const pos = process.argv[2] || 3;
const arr = [0, 1];

const step = () => {
	return arr[pos] || (() => {
		arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
		return step();
	})();
};

console.log(step());
