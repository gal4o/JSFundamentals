function solve() {
  let string = document.getElementById('string').value;
  let result ="";
  let need = document.getElementById('result');
  need.textContent = getResult(string);

  function getResult(string) {
    for(let i = 0; i<string.length; i++) {
      if(result.indexOf(string[i])===-1 || string[i] === " ") {
        result += string[i];
      }
    }
    console.log(result);
    return result;
  }

}