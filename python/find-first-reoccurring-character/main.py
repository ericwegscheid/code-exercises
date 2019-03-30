#!/usr/bin/env python3


def find_reoccurring_character(s):
    track = []
    result = 'No reoccurring characters found'

    if not isinstance(s, str):
        return result

    for character in s:
        if character in track:
            result = character
            break

        track.append(character)

    return result
