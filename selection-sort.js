const numbers=[99,2,23,55,33];

function selectionSort(array) {

    const length =array.length;

    for (let i =0; i<length; i++){
        let min =i;
        let temp = array[i];

        for (let j =i+1; j< length; j++){
            if (array[j]< array[min]) {
                min =j;
            }
        }

        array[i] = array[min];
        array[min] =temp;
    }
    return array;

}