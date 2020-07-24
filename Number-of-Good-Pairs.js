
function goodPair(array){

    let count =0;

    for (let i=0; i<array.length; i++) {

        for (let j=i+1; j<array.length; j++){
            
            if ((array[i]===array[j]) && (i<j)) {

                count++;
            };
            
        };
    };
    return count;
}

console.log(goodPair([1,2,3,1,1,3]));