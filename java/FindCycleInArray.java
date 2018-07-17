import java.util.*;

public class FindCycleInArray {

	private static Integer[] arr = {3, 2, 3, 1, 2}; // result: [3, 1, 2]
// 	private static int[] arr = {3, 2, 4, 2, 1}; // result: [2, 4, 1]
// 	private static int[] arr = {3, 2, 4, 5, 1}; // result: No cycle found
// 	private static int[] arr = {1, 2, 3, 4, 5}; // result: No cycle found

	private static Integer[] cycle = {};

	private static Integer[] step(Integer i) {
		Integer match = Arrays.asList(cycle).indexOf(i);
		Integer v = null;

		try {
			v = arr[i];

		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("No cycle found");
			System.exit(0);
		}

		if( match >= 0 ) {
			return Arrays.copyOfRange(cycle, match, cycle.length);
		}

		cycle = addToArray(i, cycle);

		return step(v);
	}

	private static Integer[] addToArray(Integer v, Integer[] a) {
		Integer[] tmp = Arrays.copyOf(a, a.length + 1);
		tmp[tmp.length - 1] = v;
		return tmp;
	}

	public static void main(String[] args) {
		FindCycleInArray App = new FindCycleInArray();

		System.out.println(Arrays.toString(step(0)));
	}
}
