#!/usr/bin/node

const arr1 = [0, 1, 5, 15, 20, 30, 37, 38, 39, 77];
const arr2 = [2, 5, 13, 30, 32, 35, 37, 42, 73, 77, 100, 101];
const commonNumbers = [];
let i1 = 0;
let i2 = 0;

const step = () => {
	let v1 = arr1[i1];
	let v2 = arr2[i2];

	if( v1 === v2 ) {
		commonNumbers.push(v1);
		i1++;
		i2++;

	} else if( v1 < v2 ) {
		i1++;

	} else {
		i2++;
	}

	if( i1 < arr1.length && i2 < arr2.length ) {
		step();
	}
}

step();

console.log(commonNumbers);
