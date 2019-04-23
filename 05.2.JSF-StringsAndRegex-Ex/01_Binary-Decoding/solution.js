function solve() {
  let str = document.getElementById('str').value;
  let result = document.getElementById('result');
  let output = '';
  let count = str.split('1').length-1;
  count = count.toString().split('');
  let sum = 0;
  while (count.length>1) {
    sum = 0;
    for (let i = 0; i < count.length; i++) {
      sum += +count[i];   
    }
    count = sum.toString().split('');
 
  }
  sum = +sum;
  str = str.slice(sum, length-sum);

  // let char = str.split(/[\d]{8}/)
  // .filter((x) => x)
  // .map((x) => String.fromCharCode(parseInt(x, 2)))
  // .join('');

  for (let i = 0; i < str.length; i+=8) {
    let char = String.fromCharCode(parseInt(str.substr(i,8), 2));
    output+=char;
  }
  
  output = output.split('')
  .filter((x) =>/[A-Za-z\s]+/g.test(x)).join('');
  
  result.textContent=output;
  
}