function solve() {
  let r = Number(document.getElementById('num').value);
  let output = document.getElementById('result');
  let sym = ['A','T','C','G','T','T','A','G','G','G'];
  for (let i = 0; i < r; i++) {
    let row =  '*'.repeat(2-i%2)+sym[i]+'-'.repeat((i%2)*2)+sym[i+1]+'*'.repeat(2-i%2);
    // izmisli zawisimost
    let p = document.createElement('p');
    p.textContent = row;
    output.appendChild(p);
    
  }
}