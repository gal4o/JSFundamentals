function solve(txt) {
    let tokens = txt.split(/[ ,.]+/);
    let nums = [];

    for (let i = 0; i<tokens.length; i++){
        if (!isNaN(parseInt(tokens[i]))) {
            nums[nums.length] = parseInt(tokens[i]);
        }
    }
    for (let i = 0; i<nums.length; i++) {
        switch (nums[i]) {
            case 1: console.log(`${nums[i]}st`);break;
            case 2: console.log(`${nums[i]}nd`);break;
            case 3: console.log(`${nums[i]}rd`);break;
            default: console.log(`${nums[i]}th`);break;
        }
    }
}

solve('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');
