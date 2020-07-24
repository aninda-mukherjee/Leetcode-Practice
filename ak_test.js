function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let firstNumber=0;
    let secondNumner=0;
    let highestNum=0;
    let include =0;

  for (i=0; i<A.length; i++) {

    firstNumber = A[i];
    for ( j=1; j<A.length; j++) {

            secondNumner = A[j]; 
            let sum = firstNumber + secondNumner;
            if (sum==0){
                if (firstNumber> secondNumner) {
                    highestNum = firstNumber;
                }
                else {
                    highestNum = secondNumner;
                }
               
                if (highestNum>include ){
                    include=highestNum;
                }
                // console.log('highestNum-->'+ include)
            }
        }      
   }
   return include;
}


// console.log(solution([1,1,2,-1,2,-2]));
// console.log(solution([1,2,3,-4]));
// console.log(solution([6,3,2,-2,-6,-3,5]));
console.log(solution([3, 2, -2, 5, -3, -5]));