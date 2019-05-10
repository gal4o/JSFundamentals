function solve(mtx1, mtx2) {
    let mtx = [];
    let remainder = 0;
    for (let r = 0; r < mtx1.length; r++) {
        mtx[r] = [];
        for (let c = 0; c < mtx1[0].length; c++) {
            mtx[r][c] = mtx1[r][c]+mtx2[r][c]+remainder;
            if (mtx[r][c]>9) {
                remainder = mtx[r][c]-9;
                mtx[r][c] = 9;
            } else{
                remainder = 0;
            }
            
        }
        while (remainder>0) {
            if (remainder<=9) {
                mtx[r].push(remainder);
                remainder = 0;
            } else {
                mtx[r].push(9);
                remainder -= 9;
            }
            
        } 
    }
    console.log(JSON.stringify(mtx));
}

solve([[9, 9], [4, 7]],
    [[9, 9], [1, 2]])