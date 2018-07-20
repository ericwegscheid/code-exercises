import java.util.*;

public class FindFirstReocurringCharacter {

	private static String str = "dabcfa"; // result: a
// 	private static String str = "adbdfa"; // result: d
// 	private static String str = "dabcfe"; // result: No reoccurring characters found

	private static Map<Character, Boolean> track = new HashMap<Character, Boolean>();
	private static String result = "No reoccurring characters found";

	public static void main(String[] args) {

		for( int i = 0; i < str.length(); i++ ) {
			char character = str.charAt(i);

			if( track.containsKey(character) ) {
				result = String.valueOf(character);
				break;
			}

			track.put(character, true);
		}

		System.out.println(result);
	}
}
