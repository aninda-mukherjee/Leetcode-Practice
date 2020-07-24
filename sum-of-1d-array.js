const sum = function(value) {

let newArray =[];
let tempValue=0;

for ( i=0; i<value.length; i++){
    if (i==0){
        tempValue =value[i];
    }else{
        tempValue =tempValue + value[i];
    }
        newArray[i]=tempValue ;
}
    return newArray;
}

console.log(sum([1,3,4,5]));