#!/usr/bin/env python3


items = []
cycle = []


def step(i):
    match = cycle.index(i) if i in cycle else -1
    v = items[i] if len(items) > i else None

    if v is None:
        return 'No cycle found'

    if match >= 0:
        return cycle[match:]

    cycle.append(i)

    return step(v)


def find_cycle(l):
    global items
    global cycle

    items = l
    cycle = []

    return step(0)
