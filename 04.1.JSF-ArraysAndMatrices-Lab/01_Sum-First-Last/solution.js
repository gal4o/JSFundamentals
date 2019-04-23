function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  
  let output = document.getElementById('result');
  
  function calculate(arr) {
    for(let i = 0; i<arr.length; i++) {
      let p = document.createElement('p');
      p.textContent = `${i} -> ${+arr[i]*arr.length}`;
      output.appendChild(p);
    }
  }

  calculate(input);
}