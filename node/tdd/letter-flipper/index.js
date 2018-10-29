#!/usr/bin/env node

const flip = require('./src/letter-flipper').flip;

console.log(flip('AB@#CD!E')); // result: ED@#CB!A
