#include <iostream>
#include <stdlib.h>
#include <string>
#include <sstream>

using namespace std;

int main(int argc, char** argv) {
	int len = argc > 1 ? atoi(argv[1]) : 100;

	for( int i = 1; i <= len; i++ ){
		string fizz = i % 3 == 0 ? "Fizz" : "";
		string buzz = i % 5 == 0 ? "Buzz" : "";
		string fizzBuzz = fizz + buzz;

		ostringstream index;
		index << i;

		cout << (fizzBuzz.length() > 0 ? fizzBuzz : index.str()) << endl;
	}

	return 0;
}
