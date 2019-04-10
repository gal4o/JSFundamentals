function greatestCD() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let output = document.getElementById('result');

    function gcd(num1, num2){
        x = Math.abs(+num1.value);
        y = Math.abs(+num2.value);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    output.textContent = gcd(num1, num2);
}