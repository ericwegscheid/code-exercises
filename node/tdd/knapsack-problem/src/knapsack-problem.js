'use strict'

const _ = require('lodash');

module.exports = {
	pack: (items, capacity) => {
		items.sort((a, b) => {
			let diffA = a[1] / a[0];
			let diffB = b[1] / b[0];

			return diffA > diffB ? -1 : diffA == diffB ? a[1] > b[1] ? -1 : 1 : 1;
		});

		let packedItems = [];
		let totalValue = 0;
		let totalWeight = 0;

		_.each(items, (item, i) => {
			let weight = item[0];
			let value = item[1];
			let potentialWeight = weight + totalWeight;

			if( potentialWeight <= capacity ) {
				totalWeight = potentialWeight;
				totalValue += value;
				packedItems.push(`${weight}/${value}`);
			}

			if( totalWeight == capacity ) {
				return;
			}
		});

		return `items: ${packedItems.join(', ')}\n${totalWeight} lbs. $${totalValue}.00`;
	}
};
