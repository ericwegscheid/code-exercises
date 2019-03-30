#!/usr/bin/env python3


def fizz_buzz(num):
    output = []

    if not isinstance(num, int):
        return 'no good'

    for i in range(num):
        i += 1
        fizz = 'Fizz' if i % 3 == 0 else ''
        buzz = 'Buzz' if i % 5 == 0 else ''
        output.append(fizz + buzz or i)

    return output
