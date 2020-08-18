package ds.doublylinkedlist;

public class App {

	public static void main(String[] args) {
		
		DubliLinkedList thelist = new DubliLinkedList();
		thelist.instertFirst(22);
		thelist.instertFirst(33);
		thelist.instertFirst(44);
		thelist.insertLast(52);
		thelist.insertLast(72);
		thelist.insertLast(52);
		thelist.displayForward();
		thelist.displayBackward();
		thelist.deleteFirst();
		thelist.deleteLast();
		thelist.deleteKey(11);
		thelist.displayForward();
		thelist.insertAfter(22, 77);
		thelist.insertAfter(33, 88);
		thelist.displayForward();
		
		
	}

}
