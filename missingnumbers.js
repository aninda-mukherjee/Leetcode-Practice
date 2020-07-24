class missingNumber {

     missingNumber(nums) {
        let sum = 0
        let expectedSum = 0
        let n = 1 // will be tracking all the natural numbers, 1..|nums| (excluding 0)
        for (let num of nums) {
          sum += num
          expectedSum += n++
        }
        
        // missing
        return expectedSum - sum
      };

}


const mNum = new missingNumber();
var points = [7, 1, 2, 3, 5, 6, 0];
points.sort(function(a, b){return a - b});
console.log(points);
let x = mNum.missingNumber(points);
console.log(x);