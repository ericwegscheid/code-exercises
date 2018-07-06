#!/usr/bin/bash


arr=(3 2 3 1 2); # result: 3 1 2
# arr=(3 2 4 2 1); # result: 2 4 1
# arr=(3 2 4 5 1); # result: No cycle found
# arr=(1 2 3 4 5); # result: No cycle found

cycle=();

function step() {
	match=-1;
	i=0;

	for v in ${cycle[@]}; do
		if [ "$v" -eq "$1" ]; then
			match=$i;
			break;
		fi
		((i++))
	done

	value=${arr[$1]};

	if [ -z $value ]; then
		echo 'No cycle found';
		return;
	fi

	if [ "$match" -gt "-1" ]; then
		echo ${cycle[@]:$match};
		return;
	fi

	cycle+=($1);

	step $value;
}

step 0
