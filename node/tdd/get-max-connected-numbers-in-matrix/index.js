#!C:\Program Files\nodejs\node.exe

const getMaxConnectedNumbersInMatrix = require('./src/get-max-connected-numbers-in-matrix');

const matrix = [[1, 1, 2], [1, 3, 3], [3, 2, 3], [2, 3, 3]];

console.log(
	getMaxConnectedNumbersInMatrix.get(matrix)
);
