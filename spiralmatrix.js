

var spiralOrder = function(matrix){
const directions = [
    [0,1],
    [1.0],
    [0,-1],
    [-1,0]
]

let currentDirectionIndex =0;

//https://www.youtube.com/watch?v=95zEFgS4WSo


const turnRight =() => {
    currentDirectionIndex = (currentDirectionIndex +1) % directions.length;
}

const result = []

let i =0;
let j = 0;

const total = matrix.length * matrix[0].length;

    while (result.length <total){

        // console.log(i,j);
        result.push(matrix[i][j])
        matrix[i][j] =null

        const nextPossible = [i + directions[currentDirectionIndex][0], j + 
        directions[currentDirectionIndex][i]]

        if (nextPossible[0]< 0 || nextPossible[0]>= matrix.length || 
            nextPossible[1]< 0 || nextPossible[1]>= matrix[0].length || 
            matrix[nextPossible[0]] [nextPossible[1]] ===null){
            turnRight()
        }
        i += directions[currentDirectionIndex][0]
        j += directions[currentDirectionIndex][1]

    }
    return result;
}

var spiralOrderNew = function(matrix){

    const result = []

    let m = matrix.length;
    let n = matrix[0].length;
    let top =0;
    let bottom = m-1;
    let left =0;
    let right = n-1;

    const total = matrix.length * matrix[0].length;

    if ( matrix.length==0 || matrix[0].length==0 || matrix ==null){
        return null;
    }

    console.log(m, n, top, bottom, left, right)

    // console.log(total);
    while ( result.length < total) {
        for ( j =left; j<= right && result.length < m* n; j++){
            result.push(matrix[top][j])
        }
        top++;
        for ( i =top; i<=bottom && result.length< m* n; i++){
            result.push(matrix[i][right])
        }
        right--;
        for (j=right; j>=left && result.length< m* n; j--) {
            result.push(matrix[bottom][j])
        }
        bottom --;
        for (i = bottom; i >=top & result.length<m*n; i--){
            result.push(matrix[i][left])
        }
        left++;
        
    }

    return result;
}

// console.log(spiralOrder([[1,2,3], [4,5,6], [7,8,9]]))

console.log(spiralOrderNew([[1,2,3], [4,5,6], [7,8,9]]))