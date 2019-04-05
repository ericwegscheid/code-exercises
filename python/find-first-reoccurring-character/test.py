#!/usr/bin/env python3

import unittest
from main import find_reoccurring_character


class TestFindReoccurringCharacter(unittest.TestCase):
    """ Tests the find_reoccurring_character function """

    def test_finds_reoccurring_character(self):
        # should return the appropriate character
        self.assertEqual(
                find_reoccurring_character('dabcfa'),
                'a')

        self.assertEqual(
                find_reoccurring_character('adbdfa'),
                'd')

    def test_finds_no_reoccurring_character(self):
        # should return 'No reoccurring characters found'
        self.assertEqual(
                find_reoccurring_character('dabcfe'),
                'No reoccurring characters found')

        self.assertEqual(
                find_reoccurring_character(''),
                'No reoccurring characters found')

        self.assertEqual(
                find_reoccurring_character(1),
                'No reoccurring characters found')


if __name__ == '__main__':
    unittest.main()
