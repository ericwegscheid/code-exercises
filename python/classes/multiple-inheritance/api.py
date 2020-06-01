#!/usr/bin/env python3


class Users():
    def get_user(self, id):
        print(f'getting users {id} ...')


class Groups():
    def get_group(self, id):
        print(f'getting group {id} ...')


class Projects():
    def get_project(self, id):
        print(f'getting project {id} ...')


class Api(
        Users,
        Groups,
        Projects
    ):

    def __init__(self):
        print('initializes with special stuff.')
