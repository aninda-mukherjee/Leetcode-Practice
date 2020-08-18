package ds.queue;

public class App {

	public static void main(String[] args) {
		
		Queue myQueue = new Queue(5);
		
		
		myQueue.insert(100);
		myQueue.insert(1000);
		myQueue.insert(1030);
		myQueue.insert(1400);
		myQueue.insert(1500);
		
		myQueue.view();
	}

}
