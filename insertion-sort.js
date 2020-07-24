const numbers =[99,33,4,5,,66,7,88];

function insertionSort(array){

    const length = array.length;
    
    if (array[i]< array[0]){
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
    }else {

        //fund where number should go
        for (let j=1; j<i; j++){
            if (array[i]> array[j-1] && array[i]< array[j]){
                //move number to the right spot
                array.splice(j,0,array.splice(i,1)[0]);
            }
        }
    }
}