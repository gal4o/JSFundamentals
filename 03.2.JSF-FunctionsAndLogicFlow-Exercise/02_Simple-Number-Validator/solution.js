function validate() {
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let result = document.getElementById('response');
    button.addEventListener('click', check);

    function check() {
        let resultText = '';
        if(input.value.length === 10 && Number(reminder(input.value)) === Number(input.value[input.value.length-1])) {
            resultText = 'This number is Valid!';
        } else {
            resultText = 'This number is NOT Valid!';
        }
        result.textContent = resultText;
    }

    function reminder(input) {
        let sum = 0;
        let multi = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        for(let i = 0; i<9; i++) {
            sum+=Number(input[i])*Number(multi[i]);
        }
        if(sum%11 === 10) {
            return 0;
        } else {
            return sum%11;
        }
    }
}