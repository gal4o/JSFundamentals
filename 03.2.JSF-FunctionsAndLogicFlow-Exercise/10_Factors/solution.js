function solve() {
   let num = document.getElementById('num').value;
   let output = document.getElementById('result');

   output.textContent = factors(num).join(' ');

   function factors(n) {
      let factors = [], i;
      for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
         if (n % i === 0) {
            factors.push(i);
               if (n / i !== i) {
                  factors.push(n / i);
               }
         }
         factors.sort(function(x, y) {
            return x - y;
         });  // numeric sort
            return factors;
      }
}