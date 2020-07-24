function GreatestNumofCandidate(candies, extraCandies){

    let maxNumber = Math.max.apply(null, candies);

    let output =[];

    for (let i=0; i<candies.length; i++){
        if ((candies[i] + extraCandies )>=maxNumber) {
            output[i]=true;
        }
        else {
            output[i]=false;
        }

    }

    return output;
}

console.log(GreatestNumofCandidate([2,3,5,1,3], 3));