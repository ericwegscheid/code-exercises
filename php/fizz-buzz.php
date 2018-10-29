#!/usr/bin/env php
<?php

$len = isset($argv[1]) ? $argv[1] : 100;

for( $i = 1; $i <= $len; $i++ ) {
	$fizz = $i % 3 == 0 ? 'Fizz' : '';
	$buzz = $i % 5 == 0 ? 'Buzz' : '';

	echo ($fizz.$buzz ? $fizz.$buzz : $i)."\n";
}
