function solve() {
   let count = 0;
   document.querySelector('button').addEventListener('click', () => {
      let p = document.querySelector('#exercise p');
      if(count%3 === 0){
         p.style.color = `blue`;
      } else if (count%3 === 1) {
         p.style.color = `green`;
      } else {
         p.style.color = `red`;
      }
      
      count++;
      p.style.fontSize = `${count*2}px`;
   });
}