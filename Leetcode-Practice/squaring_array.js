/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var squaring = function(array) {
    // let array = [1,2,3];
    let newArray = [];
    let j = 0;
    for (i=0; i<array.length; i++){
        j =array[i]*array[i];
        // console.log(j);
        newArray[i]= j;
    }
    return newArray.sort();
}

var newSquaring = function(array){
    let left =0;
    let right = array.length-1;
    let result =[];

    for (i=array.length-1; i>=0; i--){
        if ((Math.abs(array[left])> array[right])){
            result[i]=array[left] *array[left];
            left++;
        } else {
            result[i]=array[right] *array[right];
            right--;
        }
    }
    return result;

}

// squaring();
console.log(newSquaring([-2, 1,3,4]));