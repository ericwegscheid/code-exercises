#!/usr/bin/env python3

str = 'dabcfa'; # result: a
# str = 'adbdfa'; # result: d
# str = 'dabcfe'; # result: No reoccurring characters found

track = {}
result = 'No reoccurring characters found'

for character in str:
  if character in track:
    result = character
    break

track[character] = True

print(result)
