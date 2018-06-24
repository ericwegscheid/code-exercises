#!/bin/bash

len=$([[ -n $1 ]] && echo $1 || echo 100)

for (( i = 1; i <= $len; i++ )); do
	fizz=$([[ $(expr $i % 3) == 0 ]] && echo 'Fizz' || echo '')
	buzz=$([[ $(expr $i % 5) == 0 ]] && echo 'Buzz' || echo '')
	[[ -n $fizz$buzz ]] && echo $fizz$buzz || echo $i
done
