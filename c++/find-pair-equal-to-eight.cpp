#include <iostream>
#include <algorithm>

using namespace std;

int arr[] = {4, 2, 1, 4}; // result: [ 4, 4 ]
// int arr[] = {1, 9, 3, 2}; // result: 'No pair equal to 8'

int a = 0;
int b = 3;

void step() {
	if( a == b ) {
		cout << "No pair equal to 8" << endl;
		return;
	}

	int sum = arr[a] + arr[b];

	if( sum < 8 ) {
		a++;

	} else if( sum > 8 ) {
		b--;

	} else {
		cout << "[ " << arr[a] << ", " << arr[b] << " ]";
		return;
	}

	step();
}

int main() {
	sort(begin(arr), end(arr));
	step();
}
