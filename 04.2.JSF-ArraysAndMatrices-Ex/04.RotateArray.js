function solve(arr) {
    let amount = Number(arr.pop());
    let result = [];
    for(let i = 0; i<arr.length; i++) {
        result[(i+amount)%arr.length] = arr[i];
    }
    // for (let i = 0; i<amount%arr.length;i++) {
    //     arr.unshift(arr.pop());
    // }            second variant
    console.log(result.join(' '));
}
solve(
    ['Banana', 
    'Orange', 
    'Coconut', 
    'Apple', 
    '15']
);