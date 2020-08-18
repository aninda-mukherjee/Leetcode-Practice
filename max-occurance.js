//Return max occurrences of a character in a string
//Example: Input : "aabbsssccccddd" Output 4  "C" 



function maxOccurrence(S) {

    let maxNumber =0;
    let matchCount=0;
    
    for ( let i=0; i<S.length; i++) {
        for ( let j=i+1; j<S.length; j++) {
            if (S[i]===S[j]) {
                matchCount++;
            }
        }
    
    }
    
    
    }