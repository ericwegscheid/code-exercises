#!/usr/bin/node

const fs = require('fs');
const crypto = require('crypto');


// create write stream
var wstream = fs.createWriteStream('file.txt');
var str = 'Hello world!\n';

wstream.write(str);
wstream.write(crypto.randomBytes(99));

wstream.end(() => console.log('file has been written'));


// create read stream
var rstream = fs.createReadStream('file.txt', { start: 0, end: str.length });

rstream.pipe(process.stdout);

// or

// var output = '';
// 
// rstream
// 	.on('data', (chunk) => output += chunk)
// 	.on('end', () => console.log(output));
