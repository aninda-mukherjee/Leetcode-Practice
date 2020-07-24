// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// 290
// 95
// Add to List
// Share
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21


function subtractProductAndSum(n) {
    
    let numArray = n.toString().split('');
    let product =1;
    let sum =0;
    let result =0;

    for (i=0; i<numArray.length; i++) {
        product =product * numArray[i];
        sum = (sum + Number(numArray[i]));
    }
    result = (product -sum);

    return result;
};

console.log(subtractProductAndSum(4421));