
// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21

function reverse(x) {
    let reverse = parseInt(x.toString().split('').reverse().join(''));

    if (reverse > Math.pow(2,31) - 1) return 0;
    return Math.sign(x) * reverse;
    // return reverse;
};


console.log(reverse(123));