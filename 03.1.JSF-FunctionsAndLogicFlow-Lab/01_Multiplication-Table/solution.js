function solve() {
  let input = document.getElementsByTagName('input');
  let num1 = Number(input[0].value);
  let num2 = Number(input[1].value);
  let result = document.getElementById('result');
  
  if(num1>num2) {
    result.textContent = "Try with other numbers."
  } else {
    printTable(num1, num2);
  }

  function printTable(num1, num2) {
    for(let i = num1; i<=num2; i++) {
      let p = document.createElement('p');
      p.textContent = `${i} * ${num2} = ${i*num2}`;
      result.appendChild(p);
    }
  }
}