function solve() {
    let convertTo = document.getElementById('selectMenuTo');
    let option1 = convertTo[0];
    option1.value = "binary";
    option1.textContent = "Binary";
    let option = document.createElement('option');
    let option2 = convertTo.appendChild(option);
    option2.value = "hexadecimal";
    option2.textContent = "Hexadecimal";
    let btns = Array.from(document.getElementsByTagName('button'));
    btns[0].addEventListener('click', convert);

    function convert() {
        let decimal = +document.getElementById('input').value;
        let format = convertTo.options[convertTo.selectedIndex].value;
        let result ;
        if(format === 'binary') {
            result = decimal.toString(2);
        } else {
            result = decimal.toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    }

}