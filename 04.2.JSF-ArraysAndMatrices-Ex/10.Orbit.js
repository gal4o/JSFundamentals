function solve([rows, cols, x, y]) {
    let mat = [];
    for(let r = 0; r<rows; r++ ) {
        mat[r] = [];
        for(let c = 0; c<cols; c++) {
                mat[r][c] = Math.max(Math.abs(r-x), Math.abs(c-y))+1;
        }
    }
    for (let row of mat) {
        console.log(row.join(' '));
    }
}
solve(
    [3, 3, 2, 2]
);