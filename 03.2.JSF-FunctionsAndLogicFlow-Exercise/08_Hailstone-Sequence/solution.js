function getNext() {
    let num = document.getElementById('num').value;
    let output = document.getElementById('result')
    output.textContent = hailstone(num);

    function hailstone (num) {
        var seq = [num];
        while (num > 1) {
            num = num % 2 ? 3 * num + 1 : num / 2;
            seq.push(num);
        }
        seq.push('');
        return seq.join(' ');
    }
}