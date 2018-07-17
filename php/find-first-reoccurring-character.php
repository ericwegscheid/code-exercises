#!/usr/bin/php
<?php

$str = 'dabcfa'; // result: a
// $str = 'adbdfa'; // result: d
// $str = 'dabcfe'; // result: No reoccurring characters found

$track = array();
$result = 'No reoccurring characters found';

foreach( str_split($str) as $character ) {
	if( array_key_exists($character, $track) ) {
		$result = $character;
		break;
	}

	$track[$character] = true;
}

echo $result;
