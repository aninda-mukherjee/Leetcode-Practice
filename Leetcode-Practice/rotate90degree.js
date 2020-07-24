const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
  
  const F = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
function rotate(matrix) {
    const n = matrix.length;
    // console.log(n);
    const x = Math.floor(n/ 2);
    // console.log(x);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          k = matrix[i][j];
        //   console.log(k);
          matrix[i][j] = matrix[y - j][i];
          matrix[y - j][i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[j][y - i]
          matrix[j][y - i] = k
       }
    }
  }

//   function rotate_new(matrix){
//     const N = matrix.length;

//     //step1 - Transpose Matrix ( turn rows to columns)

//     for ( let i=0; i<N; i++){
//         for (let j=i; j<N; j++){
//             let temp=matrix[i][j];
//             matrix[i][j]=matrix[j][j];
//             matrix[j][i] = temp;
//         }
//     }

//     for (let i=0; i<N; i++){
//         for (let j=0; j<(N/2); j++){
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[i][N-1-j];
//             matrix[i][N-1-j]=temp;
//         }
//     }

//   }

rotate(F);
console.log(F);