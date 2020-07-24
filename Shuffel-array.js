function Shuffel(nums , counts) {

let firstBlock=[];
let secondBlock=[];
let finalNums=[];

for (let i=0; i<nums.length; i++){
    if (i <counts) {
        firstBlock[i] =nums[i];
    }
    else {
        secondBlock[i-counts] =nums[i];
    }
}

for (let x=0; x<counts; x++) {
    finalNums.push(firstBlock[x]);
    finalNums.push(secondBlock[x]);
}

 return finalNums;
}

console.log(Shuffel([7,5,9,7,5,8,10,4,3,3,2,5,9,10], 7));