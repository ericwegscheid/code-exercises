#!/usr/bin/env node

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('test', (a, b, c) => {
	console.log('yup yup', a, b, c);
});

setTimeout(() => {
	emitter.emit('test', 1, 2, 3);
}, 1000);
