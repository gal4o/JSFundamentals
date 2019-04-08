function solve(arr, activeFactor) {
    let basicMetabolism;
    let af;
    if (arr[0] === 'm') {
        basicMetabolism = 66 + 13.8 * Number(arr[1]) + 5 * Number(arr[2])- 6.8 * Number(arr[3]);
    } else {
        basicMetabolism = 655 + 9.7 * Number(arr[1]) + 1.85 * Number(arr[2])- 4.7 * Number(arr[3]);
    }
    switch (Number(activeFactor)) {
        case 0: af = 1.2;break;
        case 1: af = 1.375;break;
        case 2: af = 1.375;break;
        case 3: af = 1.55;break;
        case 4: af = 1.55;break;
        case 5: af = 1.55;break;
        case 6: af = 1.725;break;
        case 7: af = 1.725;break;
        default: af = 1.90;break;
    }
    console.log(Math.round(basicMetabolism*af));
}
solve(['f', 46, 157, 32], 5);