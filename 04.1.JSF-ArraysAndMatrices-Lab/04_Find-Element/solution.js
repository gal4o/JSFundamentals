function solve() {
  let num = parseInt(document.getElementById('num').value);
  let arr = JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let outputArr = [];

  for (let string of arr) {
    let result = string.includes(num);
    let index = string.indexOf(num);
    outputArr.push(result + ' -> ' + index)
  }
  output.textContent = outputArr;
}