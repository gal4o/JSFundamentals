function solve(arr) {
 
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].match(/[A-Za-z0-9/_]+/g)
        word.forEach(match => {
            if (match in obj) {
                obj[match]++;
                
            } else {
                obj[match] = 1;
            }
        });
        
    }
    console.log(JSON.stringify(obj));

}

solve("JS devs use Node.js for server-side JS.-- JS for devs"
)