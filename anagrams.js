const anagrams = function(){

    let strings = ["eat", "tea", "ate", "hen", "neh"];

    // const sortedString=[];
    let cache = {};
    for ( i=0; i<=strings.length-1; i++){

        let sortedString= strings[i].split('').sort().join('');
        // console.log(strings[i]);
        // console.log(strings[i].split('').sort().join(''));
        // console.log(sortedString[i]);

        console.log(cache[sortedString]);
        console.log("--" + i);
        if (!cache[sortedString]) {
            cache[sortedString]= [strings[i]]
            console.log(cache[sortedString]);
            console.log("-+-");

        }
        else {
            cache[sortedString].push(strings[i]);
            console.log(cache[sortedString]);
            console.log("-@-");
        }
        
        // (!cache[sortedString]) ? cache[sortedString]= [strings[i]]:cache[sortedString].push(strings[i]);
    }

    
    // for (j=0; J<=sortedString.length; j++){
    //     let firstStr = sortedString[j];
    //     if (firstStr===sortedString[]){

    //     }
    // }

    return Object.values(cache);
}

console.log(anagrams());