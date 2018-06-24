public class FizzBuzz {
	public static void main(String[] args) {
		int len = (args.length > 0) ? Integer.parseInt(args[0]) : 100;

		for( int i = 1; i <= len; i++ ) {
			String fizz = i % 3 == 0 ? "Fizz" : "";
			String buzz = i % 5 == 0 ? "Buzz" : "";
			String fizzBuzz = fizz + buzz;

			System.out.println(fizzBuzz.length() > 0 ?  fizzBuzz : i);
		}
	}
}
