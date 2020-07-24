function addString(num1, num2) {
    
    let result =[];
    let carry = 0;
    const firstNumber = [];
    const secondNumber = [];

    let firstNumCount = num1.length -1;
    let secondNumCount = num2.length -1;

    for ( let i=0; i<num1.length; i++){
        firstNumber.push(+num1.charAt(i));
    }

    for ( let j=0; j<num2.length; j++){
        secondNumber.push(+num2.charAt(j));
    }

    let x=0;
    let y=0;
    while (firstNumCount>=0 || secondNumCount>=0) {
    x = firstNumber[firstNumCount];
    y = secondNumber[secondNumCount];
    
    let sum = x+y+carry;
    // console.log('x-->'+x);
    // console.log('y-->'+y);
    // sum %=10;
    // console.log(sum);
        carry=sum/10;
        if (carry>=1){
            result.push(sum % 10);
            carry=1;


        }else{
            result.push(sum);
            carry=0;
        }
  
        firstNumCount--;
        secondNumCount--;
    }

    if (carry ==1 ) {
        result.push(1);
    }

    return result.reverse().toString().replace(/,/g, '');
}

console.log(addString("9", "99")); /// Not complere.. Need to finish.