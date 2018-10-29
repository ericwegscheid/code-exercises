#!/usr/bin/env node

const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
	let rstream = fs.createReadStream('file.txt');

	res.writeHead(200, {
		'Content-Disposition': 'filename=peanutbutter.txt'
	});

	rstream.pipe(res);
});

server.listen(8000, 'localhost');
