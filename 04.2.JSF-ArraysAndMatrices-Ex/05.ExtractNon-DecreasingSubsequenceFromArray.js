function solve(arr) {
    // let result = [arr[0]];
    // for(let i = 0; i<arr.length; i++) {
    //     if(+arr[i] > +result[result.length-1]) {
    //         result.push(arr[i]);
    //     }
    // } 

    let min = 0;
    let result = arr.reduce((acc, el) =>{
        if(el >= min) {
            acc.push(el);
            min = el;
        }
        return acc;
    }, []);

    console.log(result.join('\n'));
}

solve(
    [20, 
        3, 
        2, 
        15,
        6, 
        1]
);