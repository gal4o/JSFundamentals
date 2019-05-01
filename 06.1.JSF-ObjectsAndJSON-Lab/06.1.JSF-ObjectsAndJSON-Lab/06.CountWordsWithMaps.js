function solve(arr) {
    // let arr = text.split(' ');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].match(/[A-Za-z0-9/_]+/gi)
        word.forEach(match => {
            if (match.toLowerCase() in obj) {
                obj[match.toLowerCase()]++;
                
            } else {
                obj[match.toLowerCase()] = 1;
            }
        });
        
    }
    let sortedK = Object.keys(obj).sort();
    for (let key in sortedK) {
        if (sortedK.hasOwnProperty(key)) {
            console.log(`'${sortedK[key]}' -> ${obj[sortedK[key]]} times`);
            
        }
    }

}

solve("Far too slow, you're far too slow."
)