#!/usr/bin/python

arr = [3, 2, 3, 1, 2] # result: [3, 1, 2]
# arr = [3, 2, 4, 2, 1] # result: [2, 4, 1]
# arr = [3, 2, 4, 5, 1] # result: No cycle found
# arr = [1, 2, 3, 4, 5] # result: No cycle found

cycle = []

def step(i):
    match = cycle.index(i) if i in cycle else -1
    v = arr[i] if len(arr) > i else None

    if v is None:
        return 'No cycle found'

    if match >= 0:
        return cycle[match:]

    cycle.append(i)

    return step(v)

print(step(0))
