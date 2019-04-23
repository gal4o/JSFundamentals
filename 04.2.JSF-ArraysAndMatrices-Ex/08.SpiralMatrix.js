function solve(num1, num2) {
    let mat = [];
    for(let r = 0; r<+num1; r++ ) {
        mat[r] = [];
        for(let c = 0; c<+num2; c++) {
            mat[r][c] = 0;
        }
    }

    let currentR = 0;
    let currentC = 0;
    let counter = 1;
    let dir = 'r';

    for (let i = 0; i < num1*num2; i++) {
        mat[currentR][currentC] = counter;
        counter++;
        if (dir === 'r') {
            if (currentC+1 >= num2 || mat[currentR][currentC+1] !== 0) {
                dir = 'd';
                currentR++;
            } else {
                currentC++;
            }
        } else if (dir === 'd') {
            if (currentR+1 >= num1 || mat[currentR+1][currentC] !== 0) {
                dir = 'l';
                currentC--;
            } else {
                currentR++;
            }
        } else if (dir === 'l') {
            if (currentC-1 < 0 || mat[currentR][currentC-1] !== 0) {
                dir = 'up';
                currentR--;
            } else {
                currentC--;
            }
        } else if (dir === 'up') {
            if (mat[currentR-1][currentC] !== 0) {
                dir = 'r';
                currentC++;
            } else {
                currentR--;
            }
        }
        
        
    }

    for (let row of mat) {
        console.log(row.join(' '));
    }
}

solve(
    3, 3
);