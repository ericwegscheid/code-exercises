#include <bits/stdc++.h>
#include <string>

using namespace std;

string str = "dabcfa"; // result: a
// string str = "adbdfa"; // result: d
// string str = "dabcfe"; // result: No reoccurring characters found

map<char, bool> track;
string result = "No reoccurring characters found";

int main() {
	for( char& character : str ) {
		if( track.find(character) != track.end() ) {
			result = character;
			break;
		}

		track[character] = true;
	}

	cout << result << endl;

	return 0;
}
