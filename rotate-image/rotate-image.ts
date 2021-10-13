/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    //rotate outer boundary first
    // rotate inner 
    for (let r = 0; r < matrix.length; r++) {
        for(let c = r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]; 
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
    
};

/*
3X3
0,0 -> 0,2
0,1 -> 1,2
0,2 -> 2,2

1,0 -> 0,1
1,1 -> 1,1
1,2 -> 2,1

2,0 -> 0,0
2,1 -> 1,0
2,2 -> 2,0
*/