#!/bin/bash

str='dabcfa' # result: a
# str='adbdfa' # result: d
# str='dabcfe' # result: No reoccurring characters found

declare -A track
result='No reoccurring characters found'

for character in $( echo "${str}" | sed -e 's/\(.\)/\1\n/g' ); do
	if [[ -v "track[$character]" ]]; then
		result=$character
		break
	fi

	track[$character]=true
done

echo $result
