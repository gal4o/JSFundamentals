function solve(){
  let input1 = document.getElementById('input').textContent.toString();
  let input = input1.split('.'); //problem!!!
  let output = document.getElementById('output');
  if (input.length%3 === 0) {
      for (let i = 0; i<input.length; i+=3) {
          let p = document.createElement('p');
          p.textContent = input[i].concat(input[i+1], input[i+2]);
          output.appendChild(p);
      }
  } else if (input.length%3 === 1) {
      for (let i = 0; i<input.length-1; i+=3) {
          let p = document.createElement('p');
          p.textContent = input[i].concat(input[i+1], input[i+2]);
          output.appendChild(p);
      }
      let p = document.createElement('p');
      p.textContent = input[input.length-1];
      output.appendChild(p);
  } else {
      for (let i = 0; i<input.length-2; i+=3) {
          let p = document.createElement('p');
          p.textContent = input[i].concat(input[i+1], input[i+2]);
          output.appendChild(p);
      }
      let p = document.createElement('p');
      p.textContent = input[input.length-2].concat(input[input.length-1]);
      output.appendChild(p);
  }

}