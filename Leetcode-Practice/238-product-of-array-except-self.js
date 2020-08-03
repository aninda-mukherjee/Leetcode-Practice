// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).

function productExceptSelf(nums) {
    let newNums=[];
    for ( let i=0; i<nums.length; i++) {
        let product =1;
        for ( let j=0; j<nums.length; j++) {   
            if (nums[i]!=nums[j]){
                product =product*nums[j];
            }
        }
        newNums.push(product);
    }
    return newNums;
};

function productExceptSelf1(nums) { 
    let answer=[];
    answer[0] = 1;
    for ( let i=1; i<nums.length; i++){
        answer[i]=nums[i-1]*answer[i-1];
    }

    let R=1;
    for ( let j=nums.length-1; j>=0; j--) {
        answer[j]=answer[j] * R;
        R *=nums[j];
    }
    return answer;
};

console.log(productExceptSelf1([1,2,3,4]));