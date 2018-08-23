#!/usr/bin/node

const input = process.argv[2] || 78;

const arr = [1, 5, 7, 14, 18, 23, 27, 28, 33, 34, 35, 40, 49, 51, 52, 56, 60, 70, 77, 78, 79, 80, 81, 89, 90, 91, 92, 100];

let found = false;
let minIndex = 0;
let maxIndex = arr.length - 1;
let currentIndex;
let currentValue;

while( !found ) {

	debugger;

	currentIndex = Math.floor((maxIndex - minIndex) / 2) + minIndex;
	currentValue = arr[currentIndex];

	if( [maxIndex, minIndex].indexOf(currentIndex) >= 0 ) {
		break;
	}

	if( input > currentValue ) {
		minIndex = currentIndex;

	} else if( input < currentValue ) {
		maxIndex = currentIndex;

	} else {
		found = true;
	}
}

console.log(found ? `found ${input} at index ${currentIndex}` : `${input} does not exist in this array: \n${arr}`);
