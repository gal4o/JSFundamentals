function solve() {
  let degrees = Number(document.getElementById('num1').value);
  let type = document.getElementById('type').value.toLowerCase();
  
  printResult(degrees, type);

  function convert(degrees, type) {
    if(type === 'fahrenheit') {
      return result = Math.round(((degrees-32)*5)/9);
    } else if(type === 'celsius') {
      return result = Math.round(((degrees*9)/5)+32);
    } else {
      return result = "Error!"
    }
  
  }
  
  function printResult() {
    document.getElementById('result').textContent = convert(degrees, type);
  }

}