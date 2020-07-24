function reorder(array){

    let xx;
    let first =[];
    let second =[];
    for (i=0; i<array.length; i++){
        // console.log(array[i].split(" ")[1]);
        xx = array[i].split(" ")[1];
        // console.log(xx);
        
        if (!isNaN(xx)) {
            // console.log('xx')
            first.push(array[i]);
            // first.push('s')

        }
        else {
            second.push(array[i]);
        }
        

    }
    tmp = second.split('').sort().join('');
    // console.log(first);
    // console.log(second);
    return first.concat(tmp);

}

// const logs="["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]";
console.log(reorder(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));