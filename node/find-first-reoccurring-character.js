#!/usr/bin/node

var str = 'dabcfa'; // result: a
// var str = 'adbdfa'; // result: d
// var str = 'dabcfe'; // result: No reoccurring characters found

var track = {};
var result = 'No reoccurring characters found';

for( let character of str ) {
	if( track[character] ){
		result = character;
		break;
	}

	track[character] = true;
}

console.log(result);
