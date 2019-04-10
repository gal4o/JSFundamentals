function solve() {
  let inputs = document.getElementsByTagName('input');
  let resultDiv = document.getElementById('result');

  print(inputs);

  function print(inputs) {
    let startNum = Number(inputs[0].value);
    let endNum = Number(inputs[1].value);
    let firstStr = inputs[2].value;
    let secondStr = inputs[3].value;
    let thirdStr = inputs[4].value;

    for(let i = startNum; i<=endNum; i++) {
      if(i%3 === 0 && i%5 === 0) {
        let p = document.createElement('p');
        p.textContent =`${i} ${firstStr}-${secondStr}-${thirdStr}`;
        resultDiv.appendChild(p);
      } else if(i%3 === 0) {
        let p = document.createElement('p');
        p.textContent =`${i} ${secondStr}`;
        resultDiv.appendChild(p);
      } else if(i%5 === 0) {
        let p = document.createElement('p');
        p.textContent =`${i} ${thirdStr}`;
        resultDiv.appendChild(p);
      } else {
        let p = document.createElement('p');
        p.textContent =`${i}`;
        resultDiv.appendChild(p);
      }
    }
  }

}