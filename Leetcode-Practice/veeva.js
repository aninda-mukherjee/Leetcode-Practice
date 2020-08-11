/* 

#Write an efficient method that checks whether any permutation of an input string is a palindrome
#Examples: 
#veev should return true
#veeva should return false
#aveve should return false
 */

 //Brute Force Solution
 function palindrome(word) {
    let length = word.length;
    let startPoint = word.substring(0, Math.floor(length/2)).toLowerCase();
    let endtPoint = word.substring(length, Math.floor(length/2)).toLowerCase();
    let flip = endtPoint.split('').reverse().join(''); // Time Complexity of reverse() is O(n). Space complexity is O(1) 
    return (startPoint===flip);
 }

 console.log(palindrome("veev"));
 console.log(palindrome("veeva"));
 console.log(palindrome("aveve"));


 // Another logic 
 //Time Complexity  O(n).  Space Complexity is O(1)
 function palindrome1(word) {
     let i =0;
     let j = (word.length-1);

     while (i<=j) {
        if (word[i] !=word[j]) {
            return false;
        }
         i++;
         j--;
     }
        return true;
 };


 console.log(palindrome1("veaev"));
 console.log(palindrome1("veeva"));
 console.log(palindrome1("aveve"));
