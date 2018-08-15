#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const mod = process.argv[2];

if( !mod ) {
	console.error(`You must to provide a module name.\n $ ./${path.basename(__filename)} my-module.js`);
	process.exit();

} else if( fs.existsSync(mod) ) {
	console.error(`Ah ah ah, nice try, but '${mod}' already exists.`);
	process.exit();
}

fs.mkdirSync(mod);
fs.mkdirSync(path.join(mod, 'src'));
fs.mkdirSync(path.join(mod, 'test'));

let modname = mod.replace(/(\-.)/g, (v) => v[1].toUpperCase());

fs.writeFileSync(
	path.join(mod, `src/${mod}.js`),
	'\'use strict\'\n\nmodule.exports = {};'
);

fs.writeFileSync(
	path.join(mod, `test/${mod}.spec.js`),
	[
		`const expect = require('chai').expect;\n`,
		`const ${modname} = require('../src/${mod}');\n\n`,
		`describe('', () => {\n\n\tit('should ', () => {\n\t\t\n\t});\n});`
	].join('')
);

fs.writeFileSync(
	path.join(mod, 'index.js'),
	`#!${process.argv[0]}\n\nconst ${modname} = require('./src/${mod}');`
);

fs.chmodSync(path.join(mod, 'index.js'), '755');

fs.writeFileSync(
	path.join(mod, 'package.json'),
	`{
	"name": "${mod}",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"watch": {
		"test": {
			"patterns": [
				"{src,test}/*.js"
	  ],
	  "quiet": true
		}
	},
	"scripts": {
		"test": "mocha",
		"watch": "npm-watch test"
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"mocha": "2.5.3",
		"chai": "3.5.0",
		"npm-watch": "0.3.0",
		"lodash": "4.17.10"
	}
}`);

console.log([
	`SUCCESS! Your new project has been created!\n`,
	` $ cd ${mod}/ && npm install\n`,
	` $ npm run watch`
].join(''));
