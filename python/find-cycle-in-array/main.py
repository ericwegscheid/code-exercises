#!/usr/bin/env python3


arr = []
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


def find_cycle(a):
    global arr
    global cycle

    arr = a
    cycle = []

    return step(0)
