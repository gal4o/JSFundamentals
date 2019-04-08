function solve(num, arr) {
    let result = [];
    arr.sort(function(a, b){return b - a});
    for (let i = 0; i<arr.length; i++) {
        while (num>=arr[i]) {
            result[result.length] = arr[i];
            num-=Number(arr[i]);
        }
    }
    console.log(result.join(', '));
}

solve(46, [10, 25, 5, 1, 2] );