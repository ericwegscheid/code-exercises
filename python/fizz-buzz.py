#!/usr/bin/env python3

import sys

len = sys.argv[1] if len(sys.argv) >= 2 else 100

for i in range(int(len)):
  i += 1
  fizz = 'Fizz' if i % 3 == 0 else ''
  buzz = 'Buzz' if i % 5 == 0 else ''
  print(fizz + buzz) if fizz + buzz else i
