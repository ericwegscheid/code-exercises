#!/usr/bin/env ruby

$arr = [2, 3, 2, 0, 3, 5, 1, 1] # result: 6
# $arr = [2, 3, 2, 0, 3, 5, 1, 9] # result: 9
# $arr = [2, 0, 2, 0, 3, 0, 3, 2] # result: 4

$index = 1;
$reset_index = 0;
$largest_area = 0;

$arr.each_with_index do |v, i|
  i += 1

  if v == 0
    $reset_index = i;
  end

  $index = i - $reset_index

  # get all possible areas at this position
  possible_areas = [v];
  has_secondary_area = $index > 1;

  if has_secondary_area
    # multiply min running value since resetIndex with index
    possible_areas << $arr[$reset_index...i].min * $index
  end

  $largest_area = has_secondary_area ?
    (possible_areas + [$largest_area]).max :
    possible_areas[0]
end

puts $largest_area
