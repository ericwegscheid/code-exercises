#!/usr/bin/env node

const fs = require('fs');
const { exec, spawn } = require('child_process');

var file = 'file.txt';

const execFn = () => {
	exec('cat file.txt', (err, stdout, stderr) => {
		console.log('this is our file -> ', stdout);
	});
}

fs.access(file, 'r', (err) => {
	if( err ) {
		spawn(process.execPath, ['fs.js']).on('close', execFn);

	} else {
		execFn();
	}
});




