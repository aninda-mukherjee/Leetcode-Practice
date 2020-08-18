package ds.stack;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Stack theStack = new Stack(10);
		
//		theStack.push(10);
//		theStack.push(12);
//		theStack.push(1);
//		theStack.push(50);
//		
//		while(!theStack.isEmpty()) {
//			long value = theStack.pop();
//			System.out.println(value);
//		}
		
		System.out.println(reverseString("Hello"));

	}
	
	
	public static String reverseString(String str) {
		int stackSize = str.length();
		
		Stack theStack = new Stack(stackSize);
		
		for (int j=0; j< str.length(); j++) {
			char ch = str.charAt(j);
			theStack.push(ch);
		}
		
		String result = "";
		while (!theStack.isEmpty()) {
			char ch = theStack.pop();
			result = result +ch;
		}
		
		return result;
		
	}

}
