#!/usr/bin/node

const arr = [2, 3, 2, 0, 3, 5, 1, 1]; // result: 6
// const arr = [2, 3, 2, 0, 3, 5, 1, 9]; // result: 9
// const arr = [2, 0, 2, 0, 3, 0, 3, 2]; // result: 4

let index = 1;
let resetIndex = 0;
let largestArea = 0;

arr.forEach((v, i) => {
	i++;

	if( !v ) {
		resetIndex = i;
	}

	index = i - resetIndex;

	// get all possible areas at this position
	let possibleAreas = [v];
	let hasSecondaryArea = index > 1

	if( hasSecondaryArea ) {
		possibleAreas.push(
			// multiply min running value since resetIndex with index
			Math.min.apply(this, (arr.slice(resetIndex, i))) * index
		);
	}

	largestArea = hasSecondaryArea ?
		Math.max(Math.max.apply(this, possibleAreas), largestArea) :
		possibleAreas[0];
});

console.log(largestArea);
