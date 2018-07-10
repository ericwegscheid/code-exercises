#!/usr/bin/php
<?php

$arr = [3, 2, 3, 1, 2]; // result: [3, 1, 2]
// $arr = [3, 2, 4, 2, 1]; // result: [2, 4, 1]
// $arr = [3, 2, 4, 5, 1]; // result: No cycle found
// $arr = [1, 2, 3, 4, 5]; // result: No cycle found

$cycle = [];

function step($i) {
	global $arr, $cycle;

	$match = array_search($i, $cycle);
	$match = !is_int($match) ? -1 : $match;
	$v = count($arr) >= $i + 1 ? $arr[$i] : null;

	if( !$v ) {
		return 'No cycle found';
	}

	if( $match >= 0 ) {
		return array_slice($cycle, $match);
	}

	array_push($cycle, $i);

	return step($v);
}

print_r(step(0));



