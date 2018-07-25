#include <array>
#include <iostream>

using namespace std;

int arr[] = {4, 2, 1, 4}; // result: [ 4, 4 ]
// int arr[] = {1, 9, 3, 2}; // result: 'No pair equal to 8'

int a = 0;
int b = 3;

int main() {
	if( a == b ) {
		cout << "No pair equal to 8" << endl;

		return 0;
	}

	int sum = arr[a] + arr[b];

	if( sum < 8 ) {
		a++;

	} else if( sum > 8 ) {
		b--;

	} else {
		cout << "[ " << arr[a] << ", " << arr[b] << " ]";

		return 0;
	}

	main();
}
