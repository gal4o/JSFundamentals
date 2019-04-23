function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');

  ascOrd(arr);
  alphaOrd(arr);

  function ascOrd(arr) {
    let asc = arr.sort((a,b) => a-b);
    let ord1 = document.createElement('div');
    ord1.textContent = asc.join(', ');
    output.appendChild(ord1);
  }

  function alphaOrd(arr) {
    let alpha = arr.sort();
    let ord2 = document.createElement('div');
    ord2.textContent = alpha.join(', ');
    output.appendChild(ord2);
  }
}