#!/usr/bin/env ruby

$str = 'dabcfa'; # result: a
# $str = 'adbdfa'; # result: d
# $str = 'dabcfe'; # result: No reoccurring characters found

$track = {}
$result = 'No reoccurring characters found'

$str.each_char do |character|
  if $track.has_key? character
    $result = character
    break
  end

  $track[character] = true
end

puts $result
