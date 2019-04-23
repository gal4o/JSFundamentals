function solve() {
  let str = document.getElementById('str').value;
  let num = Number(document.getElementById('num').value);
  let output = document.getElementById('result');
  let result = [];

  if (str.length%num !== 0) {
    let add = 0;
    while (str.length%num !==0) {
      str+=str[add];
      add++;
    }
  }

  for (let i = 0; i < str.length; i+=num) {
    result.push(str.substr(i, num)); 
  }
  output.textContent = result.join(' ');
}