function solve(arr) {
    let result  = [];

    // let result = arr.reduce((acc, el, idx) => {
    //     if(el === 'add') {
    //         acc.push(idx+1);
    //     } else {
    //         acc.pop();
    //     }
    //     return acc;
    // }, []);        second

    for(let i = 0; i<arr.length; i++) {
        switch(arr[i]) {
            case 'add': add(i+1);break;
            case 'remove': remove(); break;
        }
    }

    function add(i) {
        result.push(i);
    }
    function remove() {
        result.pop();
    }

    if(result.length === 0){
        console.log('Empty');
    } else {
            console.log(result.join('\n'));
    
    }
    
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);