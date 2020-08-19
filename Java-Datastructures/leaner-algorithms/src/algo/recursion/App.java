package algo.recursion;

public class App {

	public static void main(String[] args) {
		recuceByOne(10);

	}

	public static void recuceByOne(int n) {
		
		if (n >=0) {
			recuceByOne(n-1);
		}
		System.out.println("Completed Call : " + n);
	}
	
	public static int recursiveLinearSearch(int []a, int i, int x) {
		
	}
}
