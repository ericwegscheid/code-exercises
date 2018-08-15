#!/usr/bin/node

const knapsack= require('./src/knapsack-problem');

console.log(
	knapsack.pack([[1, 5], [2, 3], [4, 5], [2, 3], [5, 2]], 5)
);
