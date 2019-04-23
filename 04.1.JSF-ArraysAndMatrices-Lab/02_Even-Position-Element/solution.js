function solve() {
  let input = JSON.parse(document.getElementById('arr').value);
  let output = document.getElementById('result');
  let result = [];
  for(let i = 0; i<input.length; i+=2) {
    result[result.length] = input[i];
    
  }
  output.textContent = result.join(' x ');
}