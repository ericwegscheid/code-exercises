#!/usr/bin/env ruby

len = (ARGV[0] || 100).to_i

len.times do |i|
  i += 1
  fizz = i % 3 == 0 ? 'Fizz' : ''
  buzz = i % 5 == 0 ? 'Buzz' : ''

  puts (fizz + buzz).length > 0 ? fizz + buzz : i
end
