function solve(arr1, arr2, arr3) {
    let resultArr = [];
    for (let i = 0; i<arr1.length; i++) {
        for (let j = 0; j<arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                for (let k = 0; k < arr3.length; k++) {
                    if (arr1[i] === arr3[k]) {
                        resultArr[resultArr.length] = (arr1[i]);
                    }
                }
            }
        }
    }

    resultArr.sort(function(a, b){return a - b});
    console.log(`The common elements are ${resultArr.join(', ')}.` );

    let sum = 0;
    for (let i  = 0; i<resultArr.length; i++) {
        sum+=Number(resultArr[i]);
    }
    console.log(`Average: ${sum/resultArr.length}.`);

    if (resultArr.length%2 != 0){
        console.log(`Median: ${resultArr[Math.floor(resultArr.length/2)]}.`);
    } else {
        console.log(`Median: ${(Number(resultArr[Math.ceil(resultArr.length/2)])
            +Number(resultArr[Math.ceil(resultArr.length/2-1)])
        )/2}.`);
    }

}
solve([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]);