#!/usr/bin/ruby

require 'pry-nav'

$arr = [2, 3, 2, 0, 3, 5, 1, 1] # result: 6
# $arr = [2, 3, 2, 0, 3, 5, 1, 9] # result: 9
# $arr = [2, 0, 2, 0, 3, 0, 3, 2] # result: 4

$index = 1;
$resetIndex = 0;
$largestArea = 0;

$arr.each_with_index do |v, i|
	i += 1

	binding.pry

	if v == 0
		$resetIndex = i;
	end

	$index = i - $resetIndex

	# get all possible areas at this position
	possibleAreas = [v];
	hasSecondaryArea = $index > 1;

	if hasSecondaryArea

		puts $arr[$resetIndex, i - 1].min

		# multiply min running value since resetIndex with index
		possibleAreas << $arr[$resetIndex, i].min * $index

# 		puts possibleAreas.inspect
	end

	$largestArea = hasSecondaryArea ?
		[possibleAreas.max, $largestArea].max :
		possibleAreas[0]
end

puts $largestArea
