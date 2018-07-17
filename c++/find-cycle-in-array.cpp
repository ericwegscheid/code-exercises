#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> vec = {3, 2, 3, 1, 2}; // result: [3, 1, 2]
// vector<int> vec = {3, 2, 4, 2, 1}; // result: [2, 4, 1]
// vector<int> vec = {3, 2, 4, 5, 1}; // result: No cycle found
// vector<int> vec = {1, 2, 3, 4, 5}; // result: No cycle found

vector<int> cycle = {};

void printVector(vector<int> &v) {
	cout << "[";
	for( vector<int>::iterator i = v.begin(); i != v.end(); ++i ) {
		cout << *i << (i == v.end() - 1 ? "" : ", ");
	}
	cout << "]" << endl;
}

vector<int> sliceVector(vector<int> &v, int start, int end) {
	vector<int> result(end - start + 1);
	copy(v.begin() + start, v.begin() + end + 1, result.begin());
	return result;
}

vector<int> step(int i) {
	int match = find(cycle.begin(), cycle.end(), i) - cycle.begin();
	int v = vec[i];

	if( match == cycle.size() ) {
		match = -1;
	}

	if( !v ) {
		cout << "No cycle found" << endl;
		vector<int> empty;
		return empty;
	}

	if( match >= 0 ) {
		return sliceVector(cycle, match, cycle.size() - 1);
	}

	cycle.push_back(i);

	return step(v);
}

int main() {
	vector<int> v = step(0);

	if( v.size() > 0 ) {
		printVector(v);
	}

	return 0;
}
