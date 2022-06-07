#!/usr/bin/node

// returns greatest common divisor of two numbers
const gcd = (a, b) => {
	while( a > 0 && b > 0 ) {
		if( a > b ) {
			a = a % b;

		} else {
			b = b % a;
		}
	}

	return a + b;
};

// returns least common multiple of two numbers
const lcm = (a, b) => {
	return Math.abs(a * b) / gcd(a, b);
}

console.log(gcd(16, 8)); // result: 8
console.log(lcm(16, 8)); // result: 16
