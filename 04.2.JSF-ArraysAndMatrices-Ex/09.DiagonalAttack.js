function solve(arr) {
    let mat = [];
    for(let row = 0; row <arr.length; row++) {
        mat[row] = [];
        let tokens = arr[row].split(' ').map(Number);
        for(let col = 0; col< tokens.length; col++) {
            mat[row][col] = tokens[col];
        }
    }
    let sumL = 0;
    let sumR = 0;

    for(let r = 0; r<mat.length; r++ ) {
        for(let c = 0; c<mat[r].length; c++) {
            if(r === c) {
                sumL+=mat[r][c];
            }
             if (r+c === mat[r].length-1){
                sumR+=mat[r][c];
            }
        }
    }

    if(sumL === sumR) {
        for(let r = 0; r<mat.length; r++ ) {
            for(let c = 0; c<mat[r].length; c++) {
                if(r !== c && r+c !== mat[r].length-1) {
                    mat[r][c] = sumL;
                }
                 
            }
        }
    }
    
    for (let row of mat) {
        console.log(row.join(' '));
    }
}

solve(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
    
);