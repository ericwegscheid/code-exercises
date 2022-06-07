#!/usr/bin/node

const sentence = 'I love javascript yeah';

let output = [];

sentence.split(' ').forEach((v) => {
	output.push(v.split('').reverse().join(''));
});

console.log(output.join(' '));
