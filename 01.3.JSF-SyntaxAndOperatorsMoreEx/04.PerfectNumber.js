function solve(nums) {
    let perfectNums = [];
    for (let i = 0; i <nums.length; i++) {
        if(isPerfect(nums[i])) {
            perfectNums[perfectNums.length] = nums[i];
        }
    }
    if (perfectNums.length != 0) {
        console.log(perfectNums.join(', '));
    } else {
        console.log('No perfect number');
    }

    function isPerfect(num) {
        let divisors = [];
        for(let i = num-1; i>=1; i--){
            if (Number(num)%i == 0) {
                divisors[divisors.length] = i;
            }
        }
        let sum = 0;
        for (let i = 0; i<divisors.length; i++) {
            sum+=Number(divisors[i]);
        }

        return (num === sum);
    }
}

solve([5, 6, 28]);
