function solve() {
  let first = document.getElementById('str1').value;
  let toModily = first.toLowerCase().split(' ');
  toModily.filter(s=> s!='');
  

  let second = document.getElementById('str2').value;
  let result = document.getElementById('result');
  let resultText = "";
  
  switch(second) {
    case "Camel Case":
      for (let i = 1; i < toModily.length; i++) {
        toModily[i] = toModily[i].replace(toModily[i][0], toModily[i][0].toUpperCase());
        
      }
      resultText = toModily.join('');
      break;
    case "Pascal Case":
    for (let i = 0; i < toModily.length; i++) {
      toModily[i] = toModily[i].replace(toModily[i][0], toModily[i][0].toUpperCase());
      
    }
    resultText = toModily.join('');
      
      break;
    default:
      resultText = "Error!";
      break;
  }
  output(resultText);

  function output(someString) {
    result.textContent = someString;
  }
}