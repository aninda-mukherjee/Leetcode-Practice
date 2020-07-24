
var triplets = function(number){

    // let number;
    let firstNumber=0;
    let secondNumner=0;
    let thirdNumber=0;
    let xx =[];
    for ( i=0; i<number.length; i++ ){
         firstNumber = number[i];
        for ( j=i+1; j<number.length; j++){
            secondNumner = number[j]; 
            for ( k=j+1; k<number.length; k++){
                thirdNumber = number[k];
                // console.log(thirdNumber);
                let sum = (firstNumber + secondNumner + thirdNumber);
                // console.log(sum);
                if (sum ==0){
                let sum = firstNumber + secondNumner + thirdNumber;
                    // console.log(firstNumber +'-'+secondNumner + '-' +thirdNumber);
                    xx =[firstNumber, secondNumner, thirdNumber]
                }
            }      
        }
            
    }
    return xx;
}

console.log(triplets([3,-1,-7,-4,-5, 9,-4]));