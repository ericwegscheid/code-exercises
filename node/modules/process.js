#!/usr/bin/node

const fs = require('fs');
const { exec, spawn } = require('child_process');

var file = 'file.txt';

const execFn = () => {
	exec('cat file.txt', (err, stdout, stderr) => {
		console.log('this is our file -> ', stdout);
	});
}

if( fs.existsSync(file) ) {
	execFn();

} else {
	spawn(process.execPath, ['fs.js']).on('close', execFn);
}




