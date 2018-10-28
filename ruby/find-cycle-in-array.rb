#!/usr/bin/ruby

$arr = [3, 2, 3, 1, 2] # result: [3, 1, 2]
# $arr = [3, 2, 4, 2, 1] # result: [2, 4, 1]
# $arr = [3, 2, 4, 5, 1] # result: No cycle found
# $arr = [1, 2, 3, 4, 5] # result: No cycle found

$cycle = []

def step(i)
  match = $cycle.index(i)
  v = $arr[i]

  if !v
    return 'No cycle found'
  end

  if match
    return $cycle[match..-1]
  end

  $cycle << i

  return step(v)
end

puts step(0).inspect
