function solve() {
  let string = document.getElementById('str').value;
  let output = document.getElementById('result');
  let input = string.split(' ').filter(s => s !='');
  let outStr = '';
  input.forEach(element => {
    if (Number(element)) {
      outStr+=(String.fromCharCode(element));
    } else {
      let asci = [];
      for (let i = 0; i < element.length; i++) {
        asci.push(element[i].charCodeAt(0));
        
      }
      let p = document.createElement('p');
      p.textContent = asci.join(' ');
      output.appendChild(p);
    }

  });
  let p = document.createElement('p');
  p.textContent = outStr;
  output.appendChild(p);
}