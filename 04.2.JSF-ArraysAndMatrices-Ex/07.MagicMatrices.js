function solve(mat) {
    let sumTrue = 0;
    // let magic = true;
    for(let r = 0; r<mat.length; r++){
        let sum = 0;
        for(let c = 0; c<mat[r].length; c++){
            sum+=+mat[r][c];
            
        }
        if(r === 0) {
            sumTrue = sum;
        } else if(sum !== sumTrue) {
        //    magic = false;
           return false;
        }
    }

    for(let c = 0; c<mat[0].length; c++){
        let sum = 0;
        for(let r = 0; r<mat.length; r++){
            sum+=+mat[r][c];
            
        }
        if(sum !== sumTrue) {
            // magic = false;
           return false;
        }
    }
    return true;
    // console.log(magic)
}

console.log(solve(
    [[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
));