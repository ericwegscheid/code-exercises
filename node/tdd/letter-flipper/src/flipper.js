'use strict'

const isLetter = (v) => {
	return v >= 65 && v <= 90;
};

const setCharAt = (i, v, str) => {
	let arr = str.split('');

	arr[i] = v;

	return arr.join('');
};

module.exports = (str) => {
	let i = 0;
	let j = str.length - 1;

	while( i < j ) {
		let leftChar = str[i];
		let leftCode = leftChar.charCodeAt(0);
		let leftIsLetter = isLetter(leftCode);

		let rightChar = str[j];
		let rightCode = rightChar.charCodeAt(0);
		let rightIsLetter = isLetter(rightCode);

		if( leftIsLetter && rightIsLetter ) {
			str = setCharAt(i, rightChar, str);
			str = setCharAt(j, leftChar, str);
			i++;
			j--;

		} else if( leftIsLetter ) {
			j--;

		} else {
			i++;
		}
	}

	return str;
};
