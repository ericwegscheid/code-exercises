#!/usr/bin/env python3

import unittest
from main import fizz_buzz


class TestFizzBuzz(unittest.TestCase):
    """ Test the fizz_buzz function """

    @unittest.skip
    def test_positives(self):
        # test positive use cases

        self.assertListEqual(
                fizz_buzz(5), [
                    1, 2, 'Fizz', 4, 'Buzz'])

        self.assertListEqual(
                fizz_buzz(8), [
                    1, 2, 'Fizz', 4, 'Buzz',
                    'Fizz', 7, 8])

        self.assertListEqual(
                fizz_buzz(30), [
                    1, 2, 'Fizz', 4, 'Buzz',
                    'Fizz', 7, 8, 'Fizz', 'Buzz',
                    11, 'Fizz', 13, 14, 'FizzBuzz',
                    16, 17, 'Fizz', 19, 'Buzz',
                    'Fizz', 22, 23, 'Fizz', 'Buzz',
                    26, 'Fizz', 28, 29, 'FizzBuzz'])

        self.assertListEqual(
                fizz_buzz(0), [])

        self.assertListEqual(
                fizz_buzz(True), [1])

        self.assertListEqual(
                fizz_buzz(False), [])

    def test_negatives(self):
        # test negative use cases

        self.assertEqual(
                fizz_buzz('a'),
                'no good')

        self.assertEqual(
                fizz_buzz(3.14),
                'no good')


if __name__ == '__main__':
    unittest.main()
