package ds.stack;

public class stack {

	int stack[] = new int[5];
	int top =0;

	
	public void push(int data) {
		stack[top]=data;
		top++;
	}
	
	public int pop() {
		
		int data=0;
		if(isEmpty()) {
			System.out.println("Stack is empty");
		}else {
			
			top--;
			data = stack[top];
			stack[top]=0;
		}
		
		return data;
	}
	
	public int peek() {
		int data;
	
		data = stack[top -1];
		stack[top]=0;
		return data;
		
	}
	
	public int size() {
//		int size=0;
//		for (int n : stack) {
//			size++;
//		}
		return top;
	}
	
	public boolean isEmpty() {
		
		return top<=0;
	}
	public void show() {
		for (int n : stack) {
			System.out.println(n+ " ");
		}
	}
}

