function moveZeroes(nums) {

    let zeroArray=[];
    var i = 0;
    // for (let i=0; i<nums.length; i++){
    while(i < nums.length){
        if (nums[i]==0){
            nums.splice(i,1)
            zeroArray.push(0);
        }
        else {
            i++
        }
    }
    zeroArray.forEach(zero => nums.push(0))
    return nums;

};

console.log(moveZeroes([0,0,1]));