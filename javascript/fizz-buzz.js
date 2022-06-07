#!/usr/bin/node

const len = process.argv[2] || 100;

for( i = 1; i <= len; i++ ) {
	let fizz = i % 3 == 0 ? 'Fizz' : '';
	let buzz = i % 5 == 0 ? 'Buzz' : '';

	console.log(fizz + buzz ? fizz + buzz : i);
}
