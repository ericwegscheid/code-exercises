
#!/usr/bin/node

$arr = [3, 4, 1, 3, 2, 0] # ['0 to 3', '3 to finish']
# $arr = [3, 1, 1, 4, 2, 0] # [ '0 to 3', '3 to finish' ]
# $arr = [0, 1, 3, 4, 0, 0] # No hops lead to finish

$end = arr.length - 1
$hops = []

# returns index of largest value found between indexes in range
def getNextIndex(range)
	next = 0
	nextIndex = 0

	$arr.slice(range[0], range[1] + 1)
		.each_with_index { |v, i|
			actualIndex = range[0] + i;
			potentialPos = v + actualIndex;

			if( potentialPos > next ) {
				next = potentialPos;
				nextIndex = actualIndex;
			}
		}

	return nextIndex;
}

const step = (index) => {
	let value = arr[index];

	if( !value ) {
		return 'No hops lead to finish';
	}

	let range = [index + 1, index + value];

	if( range[1] > end ) {
		hops.push(`${index} to finish`);

		return hops;
	}

	let nextIndex = getNextIndex(range);

	hops.push(`${index} to ${nextIndex}`);

	return step(nextIndex);
};

console.log(step(0));
