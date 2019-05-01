function solve(input){
    let arr = input.split(',');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(' <-> ');
        if (obj[data[0]]) {
            obj[data[0]]+= +data[1];
        } else{
            obj[data[0]] = +data[1];
        }
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
            
        }
    }

}
solve('Sofia <-> 1200000,Montana <-> 20000,New York <-> 10000000,Washington <-> 2345000,Las Vegas <-> 1000000'
);