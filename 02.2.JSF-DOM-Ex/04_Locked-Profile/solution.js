function solve() {
   let buttons = Array.from(document.getElementsByTagName('button'));
   buttons.forEach((btn) => {
      btn.addEventListener('click', show);
  })

  function show(e) {
   let status = e.target.parentNode.getElementsByTagName('input'); 
   let locked = status[0];
   let button = e.target.parentNode.getElementsByTagName('button');
   let profile = e.target.parentNode.getElementsByTagName('div');
   let hidden = profile[1];

   if(!locked.checked) {
      if(button[0].textContent === 'Show more') {
         hidden.style.display='inline-block';
         button[0].textContent = "Hide it";
       } else {
          hidden.style.display='none';
          button[0].textContent = "Show more";
       }
   } 

  }

} 