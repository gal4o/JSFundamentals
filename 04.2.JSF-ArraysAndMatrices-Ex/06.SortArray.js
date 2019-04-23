function solve(arr) {

    let result = arr.sort((a, b) => {
       return a.length-b.length || a.localeCompare(b); // za case insensitive

    });
     
    console.log(result.join('\n'));
}

solve(
    ['test', 
'Deny', 
'omen', 
'Default']
);