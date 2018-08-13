#!/usr/bin/node

const findAllSubsets = require('./src/find-all-subsets');

console.log(findAllSubsets.getSubsets([1,2])); // result: ['', '2'. '1'. '12']
