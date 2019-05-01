function solve(arr){
    let obj = {};
    for (let i = 1; i < arr.length; i+=2) {
        if (arr[i-1] in obj) {
            obj[arr[i-1]] += +arr[i];
            
        } else {
            obj[arr[i-1]] = +arr[i];
        }
    }
    console.log(JSON.stringify(obj));
}
solve(
    ["Sofia",20,"Varna",3,"sofia",5,"varna",4]
    );