

class straghtline {

    constructor() {
        this.slope;
    }

    slope(coordinates){

        let isSlope= false;
        let y3 = coordinates[2][1];
        let y2 = coordinates[1][1];
        let y1 =coordinates[0][1];
    
        let x3 = coordinates[2][0];
        let x2=coordinates[1][0];
        let x1=coordinates[0][0];

        const cordinates =[]

        if ( (y2-y1)* (x3-x1) ==(x2-x1) * (y3-y1)) {
             isSlope=true;
        }
        else {
            isSlope=false;
        }
        return isSlope;

    }
}

const mySlope = new straghtline();
let maxCount = 1;
let points = [[1,2], [2,3], [3,4], [424,4]];

for ( k=0; k < points.length; k++){

    
    if (mySlope.slope(points))
    {
        maxCount++;
    }
}
const x= mySlope.slope(points);
// console.log(x);