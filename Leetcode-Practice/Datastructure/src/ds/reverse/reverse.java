package ds.reverse;

public class reverse {

	static StringBuffer s = new StringBuffer("My Name is Aninda");
	
	public static void main(String[] args) {
		
		
		int i=0, j=0, w=0;
		
		while (i< s.length()) {
			
			if (i==0) 
				w=0;
			if (s.charAt(i)==' ' || i==s.length() -1) {
				
				if ( i==s.length() -1) {
					j=i;
				}
				else {
					j--;
				}
//				j=i;
//				j--;
				swap(w,j);
				w=i+1;
			}
			i++;
		}	
//		System.out.println(s.length());
		while(i<17) {
			swap(0,s.length()-1);
			i--;
			
		}
		System.out.println("eee-->" +s);
		

	}
	
	static void swap(int i, int j) {
		while(i < j) {
			char ch = s.charAt(i);
			s.setCharAt(i, s.charAt(j));
			s.setCharAt(j, ch);
			i++;
			j--;
		}
	}

}
