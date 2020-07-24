var topKFrequent = function(nums,k) {

    // key : frequency
    var keyFreq={};
    nums.forEach(num => {
        if (!keyFreq[num]){
            keyFreq[num]=1;
        }else{
            keyFreq[num]++;
        }
    })

    // freq: keys[]
    var freqKey={};
    for ( var key in keyFreq){
        var freq = keyFreq[key];
        if(!freqKey[freq]){
            freqKey[freq]=[];
        }
        freqKey[freq].push(key);
    }

    var sortedFreqs = Object.keys(freqKey).sort((a,b)=> b-a);
    var res=[];

    for (var i=0, resK=0; i<sortedFreqs.length; i++){
        var freq = sortedFreqs[i];
        var keys = freqKey[freq];

        for (var j=0; j<keys.length && resK<k; j++){
            res.push(keys[j]);
            resK++
        }
    }
return res;
}

console.log(topKFrequent([1,1,1,2,2,3],2))