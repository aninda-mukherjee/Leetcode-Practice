// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode"
// return 2.


function firstUniqChar(s) {

    const charecterCount ={};

        for (let i=0; i<s.length; i++){
        
            const char = s[i];
            charecterCount[char] = charecterCount[char] +1 || 1;
     
        }

        for ( let j=0; j<s.length; j++){
            const char = s[j];
            if (charecterCount[char]==1) {
                return j;

            }
        }
 
return -1;
};

console.log(firstUniqChar("loveleetcode"));