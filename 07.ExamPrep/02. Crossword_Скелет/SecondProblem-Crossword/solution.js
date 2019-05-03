function solve() {
   let input = document.getElementById('input');
   let output = document.getElementById('output').children[0];
   let buttons = Array.from(document.getElementsByTagName('button'));
   for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      switch (i) {
         case 0:
            button.addEventListener('click', filter)
            break;
            case 1:
            button.addEventListener('click', sort)
            break;
            case 2:
            button.addEventListener('click', rotate)
            break;
            case 3:
            button.addEventListener('click', get)
            break;
         
      }
   }

   function filter() {
      console.log(input)
      let second =document.getElementById('filterSecondaryCmd').selectedIndex;
      let position = document.getElementById('filterPosition').value
      let result = '';
      switch (second) {
         case 1:
         for (let i = 0; i < input.value.length; i++) {
            let char = input.value[i];
            if (char>='A'&&char<='Z') {
               result+=char;
            }
         }
         output.innerHTML += result[Number(position)-1];
            break;
            case 2:
            for (let i = 0; i < input.value.length; i++) {
               let char = input.value[i];
               if (char>='a'&&char<='z') {
                  result+=char;
               }
            }
            output.innerHTML += result[Number(position)-1];
            break;
            case 3:
            for (let i = 0; i < input.value.length; i++) {
               let char = input.value[i];
               if (char>='0'&&char<='9') {
                  result+=char;
               }
            }
            output.innerHTML += result[Number(position)-1];
            break;
         default:
         output.innerHTML = 'Error!!!'
            break;
      }
     
   }

   function sort() {
      let second =document.getElementById('sortSecondaryCmd').selectedIndex;
      let position = document.getElementById('sortPosition').value
      let result = '';

      if (second === 1) {
         result = input.value.split('').sort()
         output.innerHTML += result[Number(position)-1]
      } else if(second === 2) {
         result = input.value.split('').sort().reverse()
         output.innerHTML += result[Number(position)-1]
      } else {
         output.innerHTML = 'Error!!!'
      }
   }

   function rotate() {
      let second =+(document.getElementById('rotateSecondaryCmd').value);
      let position = +(document.getElementById('rotatePosition').value)
      let result = [];
      for (let i = 0; i < input.value.split('').length; i++) {
         result[(i+second)%input.value.split('').length] = input.value.split('')[i];        
      }
      output.innerHTML += result[Number(position)-1];
   }

   function get() {    
      let position = document.getElementById('getPosition').value
      output.innerHTML += input.value[Number(position)-1]
   }
}