function solve() {
    let mat1 = JSON.parse(document.getElementById('mat1').value);
    let mat2 = JSON.parse(document.getElementById('mat2').value);
    let output = document.getElementById('result');

    let m = multiply(mat1, mat2);
    addP(m);

    function addP(m) {  
        for (let r = 0; r < m.length; r++) {
        let p = document.createElement('p');
        p.textContent = m[r].join(', ');
        output.appendChild(p);
    }
}
// function multiply(m1, m2) {
//     let result = [];
//     for (let i = 0; i < m1.length; i++) {
//         result[i] = [];
//         for (let j = 0; j < m2[0].length; j++) {
//             let sum = 0;
//             for (let k = 0; k < m1[0].length; k++) {
//                 sum += m1[i][k] * m2[k][j];
//             }
//             result[i][j] = sum;
//         }
//     }
//     return result;
// }


function multiply(m1, m2) {
    let result = [];
    for (let i = 0; i < Math.max(m1.length, m2.length); i++) {
        result[i] = [];
        
        for (let j = 0; j < 2; j++) {
            sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum+= +m1[i][k] * +m2[j][k];
            }
            result[i][j] = sum;
        }
    }
    
    return result;
}

}