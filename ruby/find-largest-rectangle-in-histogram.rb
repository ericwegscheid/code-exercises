#!/usr/bin/ruby

$arr = [2, 3, 2, 0, 3, 5, 1, 1] # result: 6
# $arr = [2, 3, 2, 0, 3, 5, 1, 9] # result: 9
# $arr = [2, 0, 2, 0, 3, 0, 3, 2] # result: 4

$map = {}
$index = 1;
$resetIndex = 0;
$largestArea = 0;

$arr.each do |v, i|
	i += 1

	if !v
		$resetIndex = i;
	end

	$index = i - $resetIndex

	# get all possible areas at this position
	possibleAreas = [v];
	hasSecondaryArea = $index > 1;

	if hasSecondaryArea
		# TODO work in progress here
		# possibleAreas << 
	end
end


