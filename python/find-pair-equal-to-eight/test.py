#!/usr/bin/env python3

import unittest
from main import fn


class TestFn(unittest.TestCase):
    """ Test the fn function """

    def test_positives(self):
        # test positive use cases

        self.assertEqual(
                fn('a'),
                'a')

    def test_negatives(self):
        # test negative use cases

        self.assertEqual(
                fn(1),
                'no good')


if __name__ == '__main__':
    unittest.main()
