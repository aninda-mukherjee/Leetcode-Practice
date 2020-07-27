// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

function validPalindrome(s) {

    let a_pointer=0;
    let b_pointer=s.length-1;

    while ( a_pointer <=b_pointer) {
        if (s[a_pointer]!==s[b_pointer]){
            return helper(s,a_pointer+1, b_pointer) || helper(s,a_pointer, b_pointer-1);
        }
        a_pointer++;
        b_pointer--;
    }
    return true;
    
};

function helper(st, i, j) {

    let a_pointer=i;
    let b_pointer=j;

    while ( a_pointer <=b_pointer) {
        if (st[a_pointer]!==st[b_pointer]){
            return false;
        }
        a_pointer++;
        b_pointer--;
    }
    return true;

}

console.log(validPalindrome("abca"));