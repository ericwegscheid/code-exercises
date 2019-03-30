#!/usr/bin/env python3

import unittest
from main import find_cycle


class TestFindCycleInArray(unittest.TestCase):

    def test_finds_correct_cycle(self):
        # Test for correct output
        self.assertListEqual(find_cycle([3, 2, 3, 1, 2]), [3, 1, 2])
        self.assertListEqual(find_cycle([3, 2, 4, 2, 1]), [2, 4, 1])

    def test_finds_no_cycle(self):
        # Test for no cycle is found
        self.assertEqual(find_cycle([3, 2, 4, 5, 1]), 'No cycle found')
        self.assertEqual(find_cycle([1, 2, 3, 4, 5]), 'No cycle found')


if __name__ == '__main__':
    unittest.main()
