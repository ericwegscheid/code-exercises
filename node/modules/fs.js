#!/usr/bin/node

const fs = require('fs');
const crypto = require('crypto');


// create write stream
// -------------------

var wstream = fs.createWriteStream('file.txt');
var firstLine = 'Hello world!\n';
var secondLine = 'I like pizza!\n';

wstream.write(firstLine);
// wstream.write(crypto.randomBytes(8));

// last line to add
wstream.end(secondLine, () => console.log('wstream.end() called'));

// will not trigger unless wstream.end() is called
wstream.on('finish', () => console.log('wstream.on(\'finish\', ...) triggerred'));


// create read stream
// ------------------

// var rstream = fs.createReadStream('file.txt', { start: 0, end: firstLine.length });
var rstream = fs.createReadStream('file.txt');

// to output stream as it comes
rstream
	.on('end', () => console.log('rstream.on(\'end\', ...) triggerred'))
	.pipe(process.stdout);

// or, to output all the results at once
// var output = '';
// rstream
// 	.on('data', (chunk) => output += chunk)
// 	.on('end', () => console.log(output));


console.log('wstream and rstream are not blocking');
