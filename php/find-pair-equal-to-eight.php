#!/usr/bin/env php
<?php

// $arr = [4, 2, 1, 4]; // result: [ 4, 4 ]
$arr = [1, 9, 3, 2]; // result: 'No pair equal to 8'

$a = 0;
$b = count($arr) - 1;

function step() {
	global $arr, $a, $b;

	if( $a == $b ) {
		echo 'No pair equal to 8';

		return;
	}

	$sum = $arr[$a] + $arr[$b];

	if( $sum < 8 ) {
		$a++;

	} elseif( $sum > 8) {
		$b--;

	} else {
		echo '['.$arr[$a].', '.$arr[$b].']';

		return;
	}

	step();
}

step();
